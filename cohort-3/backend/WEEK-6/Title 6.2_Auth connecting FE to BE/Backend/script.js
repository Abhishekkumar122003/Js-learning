const express= require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("hello" )
    console.log(req.method
        
    )
})
app.post("/sum/:a/:b", (req, res)=>{
    const num1=parseInt(req.params.a);
    const num2=parseInt(req.params.b);

    const sum=num1+num2;
    res.json({
        sum:sum,
    })
})
app.post("/sub/:a/:b", (req, res)=>{
    const num1=parseInt(req.params.a);
    const num2=parseInt(req.params.b);

    const sub=num1-num2;
    res.json({
        sub:sub,
    })
})
app.post("/multi/:a/:b", (req, res)=>{
    const num1=parseInt(req.params.a);
    const num2=parseInt(req.params.b);

    const multi=num1*num2;
    res.json({
        multi:multi,
    })
})
app.post("/div/:a/:b", (req, res)=>{
    console.log(req.method, " hi there")
    const num1=parseInt(req.params.a);
    const num2=parseInt(req.params.b);

    const div=num1/num2;
    res.json({
        div:div,
    })
})



app.listen(3002)