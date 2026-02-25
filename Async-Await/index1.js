//async await

// async function always return a promise

// async function greet(){
//     return "rohit";
// }

// const response = await greet(); // without await  it give promise {rohit}
// console.log(response)



const responsse = await fetch("https://api.github.com/users")
const data = await  responsse.json();
// console.log(data)



// Above progaram which is "await" leads to freze the exicution of the code to the await line, jisse age kaa code run tbhi krrega jb  await wala code exicute nhi hojay


// how to mannage this problem , simply by write all code inside function

async function github() {
    console.log("hello");
    const Response = await fetch("https://api.github.com/users");
    const Data = await Response.json();
    console.log(Data);
}

github();

console.log("Now ab yee line no: 33 hello world phle print hoga 👌")


// kbhi kbhi hume jo task parallel exicute krna hota hai example mailo , ki tum koi data 
// laai hoo chat server see "userComment" , "userPhoto" , "chat" . 
//abb ye tumhe "ASYNC" see krnne gye to one at a time hee hoga 
// too hum "Promise.all()" use krte hai 

// async function userDetails(params){
//     const comment = await fetch("userComment");
//     const photo = await fetch("userPhoto");
//     const chat = await fetch("chat");
//     // above three lines code will not execute parallel 

//     const [Comment, Photo, Chat] = await Promise.all([fetch("userComment")], [fetch("userPhoto")], [fetch("chat")])
// }