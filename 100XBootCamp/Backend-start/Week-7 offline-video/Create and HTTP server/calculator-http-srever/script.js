` we write http server for calculator using express js. 
 
 we can also use (hono, elysiajs, trpc) , but we use express for this

-> create an http server which support four Routes


    1. add
    2. sub
    3. div
    4. mul

notes:
 1. give attention here at "res.send" or "res.json()" many more,
    one thing I notice that i can only send one res.___(response),
    If i want to send more then one response then I need to do it in other way

`



const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/script.html"));
});

app.get("/sum/:a/:b", (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sum = a+b;
     res.json({
        ans:sum
     })
})
app.get("/sub/:a/:b", (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const sub = a-b;
     res.json({
        ans:sub
     })
})
app.get("/mul/:a/:b", (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const mul = a*b;
     res.json({
        ans:mul
     })
})
app.get("/div/:a/:b", (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const div = a/b;
     res.json({
        ans:div
     })
});

app.listen(3000);