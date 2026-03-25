`fetch method
async function moresimple() {
    const response = await fetch("https://api.github.com/users");
    const json = await response.json();
    console.log(json.length , "hi");
} 

moresimple();
`
// NOw Axios method
const axios = require("axios");

async function main(){
    const response = await axios.get("https://api.github.com/users");
    console.log(response); //this give me every last bit of information about fetched data ex:- full information about user ,order no, address, phone no, date-time, order, etc.
    console.log(response.data);  // i get the answer in (response.data) here like the actual needed data ex:- a burger 

}
// main();


// how can you send a request of POST METHOD
`axios.method("url" , {second argument-> send body(data)} , {thired argument -> send HEaders})`
async function post(){
    const response = await axios.post("https://www.postb.in/1774447622171-9223510392475" , {
        username:"herkirt",
        userpassword:"ur-8/u-i/*2v<j>:a"
    } , {
        headers: {
            "Authorization": "Bearer 123"
        }
    });  //
    // console.log(response); //this give me every last bit of information about fetched data ex:- full information about user ,order no, address, phone no, date-time, order, etc.
    console.log(response.data);  // i get the answer in (response.data) here like the actual needed data ex:- a burger 

}
// post();


async function httpdump(){
    // request config which you give back 
    const response = await axios.post(
        "https://httpdump.app/dumps/ba292781-0ea0-4cae-b627-dc5fb9f035ab?a=1&b=1" ,
         {
            username:"herkirt",
            userpassword:"ur-8/u-i/*2v<j>:a"
         } ,
          {
        headers: {
            "Authorization": "Bearer 123",
            "constent-Type" : "application.json"
        }
        });  
    // console.log(response); //this give me every last bit of information about fetched data ex:- full information about user ,order no, address, phone no, date-time, order, etc.
    console.log(response.data);  // i get the answer in (response.data) here like the actual needed data ex:- a burger 

}
httpdump()