const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const JWT_Secret = "randomeluytyopeshitoutofnothingnsdfok";
app.use(express.json());

const users = [];
app.get("/", (req, res) => {
    res.json({
        message: "You're on right place",
    })
})

app.post("/signup", (req, res) => {
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

app.post("/signin", (req, res) => {
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

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodedtoken = jwt.verify(token, JWT_Secret);
    const username = decodedtoken.username;

    const foundUser = users.find((user) => {
        if (username == user.username) {
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
app.listen(3011);