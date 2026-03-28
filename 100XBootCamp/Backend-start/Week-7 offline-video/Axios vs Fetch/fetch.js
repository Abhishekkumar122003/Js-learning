const { response } = require("express");

` Write a code to fetch the data from 
    "https://api.github.com/users"
`
console.log("hi there")
function main(){
    fetch("https://api.github.com/users")
       .then( async (response)=>{
            // console.log(response) // it gives you what 
            const json = await response.json();
            // console.log(json.length); // this gives total length of the object
            // console.log(json); // this is going to print all the object value
    });
}
// main();

`Moret cleaner way to do the same task
    use "async function "
`
async function cleanway(){
    try{const response = await fetch("https://api.github.com/users");
        if(!response.ok)
            throw new Error("The process may be get some problem sorry");   
        
        const data = await response.json();
        console.log(data.length);
    }
    catch(err){
        console.error(err);
    }
}
// cleanway();

` OR the more simpler way `

async function moresimple() {
    const response = await fetch("https://api.github.com/users");
    const json = await response.json();
    console.log(json.length , "hi");
} 

// moresimple();

// how can you send a request of POST METHOD
async function post() {
    const response = await fetch("https://www.postb.in/1774447622171-9223510392475", {
        method:"POST" ,  // here in fetch you have to give the requires method here like POST , GET , PUT
        body:{ //sometime you want to send back data this is how you do that in "body" 
            username:"herkirt",
            userpassword:"ur-8/u-i/*2v<j>:a"
        },
        headers: {
            "Authorization": "Bearer 123"
        }
    });
    const json = await response.text();
    console.log(json , "hi");
} 
// post(); in this case ther is no end point to test the posted body and headers 

`use use http dump url to see your rsponses`

async function httpdump() {
    const response = await fetch(
        "https://httpdump.app/dumps/ba292781-0ea0-4cae-b627-dc5fb9f035ab", 
        {
        method:"POST" ,  // here in fetch you have to give the requires method here like POST , GET , PUT
        body: JSON.stringify( { //sometime you want to send back data this is how you do that in "body" 
            username:"herkirt",
            userpassword:"ur-8/u-i/*2v<j>:a"
        }),
        headers: {
            "Authorization": "Bearer 123",
            "Content-Type": "application/json"
        }
    });
    const json = await response.text();
    console.log(json , "hi");
} 
httpdump();