const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_Secret = "sjvbdfiwegbfjsontruigreiwthuoueyou";
const app = express();
app.use(express.json());
const { authMiddleware } = require("./Middleware")

//using Postgres SQL DataBase 
const {  Pool } = require('pg');
const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_g93MKjsTiebw@ep-cold-shape-apdf3mjm-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})


const path = require('path');
const { convertProcessSignalToExitCode } = require('util');

const notes = []; //This is bad -- eventually we'll learn about databases { mogodb, postgres, mysql}
const users = [];

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    // const response = await pool.query(`INSERT INTO users (username , email , password) VALUES ('${username}', '${email}' , '${password}' ) RETURNING id `)
    // Better way to write the query to protect from SQL injection
    const response = await pool.query(`INSERT INTO users (username , email , password) VALUES ($1 , $2 , $3) RETURNING id ` , [ username , email , password ]) // this is templet form to pass the argument to the postgres
     
    console.log(response)
    res.json({
        message: "you are signup done",
        id : response.rows[0].id
    })

})

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
console.log(`SELECT * FROM users  WHERE email='${email}' AND password='${password}'  `)
    const response = await pool.query(`SELECT * FROM users  WHERE email='${email}' AND password='${password}'  `)
    const userExits = response.rows[0];
    if (userExits) {
        const token = jwt.sign({
            password: password,
            id: response.rows[0] 
        }, JWT_Secret)

        res.json({
            token: token
        })
    } else {
        res.json({
            message: "incorrect user's details"
        })
    }
});
//POST - Create a note --  AUTHENTICATED ENDPOINT
app.post("/notes", authMiddleware , (req, res) => {
    const username = req.username
    const note = req.body.note;
    notes.push({ username, note });
    res.json({
        message: "Done!",
    })
})

//GET - get all notes 
app.get("/notes", authMiddleware , (req, res) => {
    const username = req.username
    const UserNotes = notes.filter(note=>note.username === username)
   
    res.json({
        notes: UserNotes
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
})
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/signup.html"));
})
app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/signin.html"));
})


app.listen(3000);