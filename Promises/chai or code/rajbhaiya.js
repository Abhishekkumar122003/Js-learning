const promisesone = new Promise(function(resolve, reject){
    //what type of work we can perform here inside the promises
    //DB(database)call , cryptography , network call
    // setTimeout(()=>{
    //     // console.log("hi this is promises")
    //     resolve()
    // },1000)
    const a = []
    for (let i = 0; i < 100000; ++i) {
     a.push(i)
    }

    reject();
})

promisesone.then(()=>{
    console.log("Promise1 consumed:");
}).catch((err)=>{
    console.error(err);   
})
console.log("Promises not completed yet");

console.log("one");

function block(){
    const a = []
    for (let i = 0; i < 100000; ++i) {
     a.push(i)
    }
    console.log("three");
    
}
block();
console.log("two");
    