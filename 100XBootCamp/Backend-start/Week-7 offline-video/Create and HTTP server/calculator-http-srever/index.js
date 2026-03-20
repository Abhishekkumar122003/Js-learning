` we write http server for calculator using express js. 
 
 we can also use (hono, elysiajs, trpc) , but we use express for this

-> create an http server which support four Routes


    1. add
    2. sub
    3. div
    4. mul

`

 const express = require("express")
 const app = express();

//  app.get("/sum");
//  app.get("/sub");
//  app.get("/mul");
//  app.get("/div");

app.get("/" , function(req, res){
    res.sendFile("/home/harkiratstudent/code-army-js/code Army Javascript/100XBootCamp/Backend-start/Week-7 offline-video/Create and HTTP server/calculator-http-srever/index.html")
})


//http://localhost:3000/sum?a=1&b=3  -> this is only for static value 
app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);    //here bwe parse the value to integer because when the data comes from webpage it's come in string format, so we have to convert it into our 
    const b = parseInt(req.query.b);    //here bwe parse the value to integer because when the data comes from webpage it's come in string format, so we have to convert it into our 

    const sum = a + b;

    // res.json({  //we send thy answer in json forment we can also send back in different formet 
    //     ans:sum
    // })
    // res.send(sum.toString())  // we can also send plan text 
    res.send("<b><ul>"+sum+ " hi there this way you can send value in html format "+"</ul></b>") 
})

// http://localhost:3000/sum/any-value/any-value -> dynamic value is given

app.get("/sub/:a/:b" , (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sub = a - b;

    res.send(sub.toString())
})

app.get("/mul/:a/:b" , function(req, res){
    const a = parseInt( req.params.a);
    const b = parseInt( req.params.b);

    const mul = a * b ;

    res.json({
        ans: mul
    })
})

app.get("/div/:a/:b" , (req , res)=> {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const div = a / b;

    res.send("<h1>"+ div +"</h1>")
})


 app.listen(3000);  // 3000 is a port
 
 //my IP address for local host is=> 127.0.0.1