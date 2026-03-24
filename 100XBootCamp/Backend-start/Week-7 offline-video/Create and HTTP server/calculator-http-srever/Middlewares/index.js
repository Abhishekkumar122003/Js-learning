`
what is MiddleWares?
How it work

  app."use()" this => ".use() " is what's lets you define a middleware
`


const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());  
app.use(function(req , res , next){
    console.log("hi there");
    next();
})
app.get("/", (req, res)=>{
    
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/sum/", (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sum = a+b;
     res.json({
        ans:sum
     })
})
app.post("/sub/", (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sub = a-b;
     res.json({
        ans:sub
     })
})
app.post("/mul/", (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const mul = a*b;
     res.json({
        ans:mul
     })
})
app.post("/div/", (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const div = a/b;
     res.json({
        ans:div
     })
});

app.listen(3002);