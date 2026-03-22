const  express = require("express");
const app = express();
// console.log(express)


function calculateSum(vlaue){
    const ans = 0;
    for(let i=1; i<=vlaue; i++){
        ans +=i;
    };
    console.log(ans);
    
    return ans;
};



// app.get("/", (req, res)=>{
//     const value = parseInt(req.query.value);
//     const answer = calculateSum(value);

//     res.send("<h1>"+ answer+"</h1>")
    
// });

app.get("/", (req, res)=>{
    // res.send("Hi there");
    const val = req.query.n;
    const ans = calculateSum(val);
    res.send("<h1>"+ ans +"</h1>")
})
app.listen(3000);