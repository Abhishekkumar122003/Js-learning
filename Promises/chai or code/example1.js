const promisesone = new Promise(function(resolve, reject){
    //what type of work we can perform here inside the promises
    //DB(database)call , cryptography , network call
    setTimeout(()=>{
        // console.log("hi this is promises")
        resolve()
    },1000)
    const a = []
    for (let i = 0; i < 100000; ++i) {
     a.push(i)
    }

    resolve()
})

promisesone.then(function(){
    // console.log("Promise1 consumed:")
})

new Promise((resolve, reject)=>{
   setTimeout(()=>{
    //  console.log("hi this is Promises2");
     resolve()
   }, 1000);
}).then(()=>{
    // console.log("Promises2 is consumed");
})

const promises3 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username:"chai or code",email:"chai@example.com"})
    },1000)
})
promises3.then((user)=>{
    // console.log(user)
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"hitesh"})
        }else{
            reject('Error: something went wrong')
        }
    },1000)
})
promise4.then((user)=>{
    // console.log(user)
}).catch((err)=>{
    // console.log(err)
})
.finally(()=>{
    // console.log("The promise is either resolve or get rejected:L ")
})


const promise5 = new Promise((resolve , reject) => {
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"harlirt ", password:1123})
        }else{
            reject('Error: JS went wrong: ')
        }
    },1000)
})
 

//how to consumed "promise5" using "async await"
async function consumePromise5() {
    try {
    const response = await promise5;
    // console.log(response)
    } catch (error) {
        // console.log(error)
    }
}
// consumePromise5()

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json();
        // console.log(data);
        return data
    }catch(err){
        // console.log(err)
        return err
    }
}
const dataa= await getAllUsers()
// console.log(dataa)

// 2nd method without using  const data = response.json();
        // console.log(data);
        // "return data" <= This return

async function getAllUsersone(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
        return data
    }catch(err){
        console.log(err)
        return err
    }
}

// getAllUsersone()



// how to do same thing using ".then().catch()"
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})