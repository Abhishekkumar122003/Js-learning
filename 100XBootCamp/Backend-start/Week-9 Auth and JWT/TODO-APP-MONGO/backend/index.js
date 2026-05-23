const express = require("express");
const app = express();
const {authMiddleware} = require('./middleware')
const jwt = require('jsonwebtoken');
const JWT_Secret = "idsodntkonfo0ewnfoiwewathwhtatidioowhatrieirti";
const  {todoModel , userModel} = require("./models");
const { default: mongoose } = require("mongoose");

app.use(express.json());
let USERS =[];
let TODOS = []; 
// define all the route 
let CURRENT_USER_ID = 1;
let CURRENT_TODO_ID = 1;
app.post("/signup" , async (req, res )=>{
    const username = req.body.username;
    const password = req.body.password;

    // const existingUser = USERS.find(u => u.username===username); // abb kuky mujhe mongoose ata hai to use jodte hai
     const existingUser = await userModel.findOne({
        username:username,
        password:password
    });
    if(existingUser){
        res.status(403).json({
            message: "user with this name alredy exist"
        })
        return
    }
    // USERS.push({
    //     username:username,
    //     password:password,         // let push this data into actual database
    //     userid: CURRENT_USER_ID++  
    // })

    const newUser = await  userModel.create({
        username:username,
        password:password
    });
    res.json({
        id:newUser._id
    })
console.log(USERS)

});
app.post("/signin" , (req, res )=>{ 
        console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    console.log(username , password)
    const userexist = USERS.find(u => u.username === username && u.password === password);
    if(!userexist){
        res.status(411).json({
            message:"incorrect password or username"
        })
        return
    }
    const token = jwt.sign({
        userid:userexist.userid
         }, JWT_Secret);

    res.json({
        massage:"You're signin successfuly",
        token:token
    })
});

app.post("/todos", authMiddleware ,(req, res )=>{
    const userid = req.userid;
    const description = req.body.description;
    const title = req.body.title;
    TODOS.push({
        id:CURRENT_TODO_ID++,
        description:description,
        userid:userid,
        title:title
    })
    res.json({
        message:"Todo made"
    })
});

app.delete("/todo/:todoId", authMiddleware, (req, res )=>{
    const userid = req.userid;
    const todoId = parseInt(req.params.todoId);
    const doesUserOwnTodo = TODOS.find(t => t.userid === userid && t.id===todoId);
    if(doesUserOwnTodo){
        TODOS = TODOS.filter(t=>t.id===todoId);
        res.json({
            message: "todo is deleted successfully"
        })
    }else{
        res.status(402).json({
            message:"Either todo doesn't exist or this is not your's todo"
        })
    }
})
app.get("/todos",authMiddleware, (req, res)=>{
    const userid = req.userid;
    const userTodos = TODOS.filter(t=> t.userid === userid);
    if(userTodos){
        res.json({
            todo:userTodos
        })
    }else{
        res.status(405).json({
            message:"you enter incorrect userid"
        })
    }
});

app.listen(3001)