const path = require('path')
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_Secret = "randomeluytyopeshitoutofnothingnsdfok";
app.use(express.json());

const users = [];
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname , "../frontend/index.html"));
}) 
function logger(req, res, next) {
    console.log(req.method + " request come");
    next();
}
app.post("/signup",logger, (req, res) => {
    // console.group("hiii there, this is signup user value/details");
    let id = 0;
    const username = req.body.username;
    const password = req.body.password;
    console.log("this is password", password);
    users.push({
        id: id,
        username: username,
        password: password
    })
    res.json({
        message: "You are signed up",
    })
    console.log(users)
    
});

app.post("/signin",logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const findUser = users.find((user) => {
        if (username == user.username && password == user.password) {
            return true;
        } else {
            return false;
        }

    });
    console.log(findUser, "hi this is triger")
    if (findUser) {
        const token = jwt.sign({
            username: username,
        }, JWT_Secret);
        res.json({
            message: token,
        })
    } else {
        res.status(403).json({
            message: "Invalid User Datails"
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_Secret);
     
     if(decodedData.username){
        //how to pass data to the next function , this is done as
        req.username = decodedData.username;
        next();
     }else{
        res.json({
            message: "You're not logged in"
        })
     }
}


 
app.get("/me",logger,auth, (req, res) => {

    const foundUser = users.find((user) => {
        if (req.username == user.username) {
            return true;
        } else {
            return false;
        }

    }) 
    if (foundUser) {
        res.json({
            userName: foundUser.username,
            userPassword: foundUser.password
        })
    } else {
        res.json({
            message: "User not found"
        })
    }
})
app.listen(3001);