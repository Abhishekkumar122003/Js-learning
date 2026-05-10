const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_Secret = "sjvbdfiwegbfjsontruigreiwthuoueyou";
const app = express();
app.use(express.json());

const path = require('path');

const notes = []; //This is bad -- eventually we'll learn about databases { mogodb, postgres, mysql}
const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userExits = users.find(user => user.username === username);
    if (userExits) {
        return res.status(403).json({
            message: "user with this id already exits"
        })
    }
    users.push({
        username: username, password: password
        // sort form if key and value are same we can write=> username , password 
    })
    res.json({
        message: "you are logged in",
    })

})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExits = users.find(user => user.username === username && user.password === password);
    if (userExits) {
        const token = jwt.sign({
            username: username
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
//POST - Create a note
app.post("/notes", (req, res) => {
    const token = req.headers.token;
    if (!token) {
        res.status(403).send({
            message: "You're not logged in"
        })
        return;
    }

    const decoded = jwt.verify(token, JWT_Secret);

    const username = decoded.username;
    if (!username) {
        res.status(403).json({
            message: "Malformed token "
        })
        return;
    }
    const note = req.body.note;
    notes.push({ username, note });
    res.json({
        message: "Done!",
    })
})

//GET - get all notes 
app.get("/notes", (req, res) => {
    const token = req.headers.token;
    if (!token) {
        res.status(403).send({
            message: "You're not logged in"
        })
        return;
    }

    const decoded = jwt.verify(token, JWT_Secret);
 
    const username = decoded.username;
    if (!username) {
        res.status(403).json({
            message: "Malformed token "
        })
        return;
    }

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