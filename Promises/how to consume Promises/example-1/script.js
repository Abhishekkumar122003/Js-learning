console.log("hello world!");

// const p1 = fetch("https://api.github.com/users")
// console.log(p1); // not working it give the o/p-> <pending>

// we don't read pomises directly, it gie pending as responses.
// we can read promises after jb server send the responses
// it give 1. reject yaa to 2.fullfilled

// "p1 " is after  fullfilled yaa to reject 
 //we don't use these method
// const p2 = p1.then((responses)=>{ 
//     return responses.json()
// })

// p2.then((response)=>{
//     console.log(response)
// })

  

// WE USE PROMISE CHAINING METHOD


fetch("https://api.github.com/users")
.then((reponse)=>{
    return reponse.json();
})
.then((data)=>{
    // console.log(data)
    const parents = document.querySelector(".first");
    for(let i=0;i<=data.length;i++){
    const image = document.createElement('img');
    image.style.height="100px";
    image.style.width="100px";
    image.src= data[i].avatar_url;

    parents.append(image);
    }
})

console.log("world End now");

