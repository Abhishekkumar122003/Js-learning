const p1 = new Promise((resolve, reject)=>{
    resolve({
        name:"Rohit",
        age:30,
    })
});
p1.then((response)=>{
    console.log(response);
})
p1.catch((error)=>{
    console.log(error);
})