//const 

//Reassignment
const value = 23
// value = 2;
// value = "sdcs"; // it gives error bcz it's a const variable which cannot be modified
// console.log(value);

// block scope

if(true){
    const PI = 3.14159;
};

// console.log(PI);  // OutPut-> ReferenceError: PI is not define

// Mutability
const CONFIG = {
    port: 8080,
}

CONFIG.port=3838;  // this is allowed, becouse COFIG var still point to same object
// console.log(CONFIG.port); 

//Temporal Dead Zone
// console.log(MY_CONST); //ReferenceError: MY_CONST is not defined yet

const MY_CONST = 100; // now i can access



// LET 

//Block Scope
for(let i=0; i < 3; i++){
    // i is only visible here
}
// console.log(i);  // RefenenceError: i is not defined yet

//Reassignment
let counter = 0;
counter = 1; //This is allowed.

//Initialization
let name; //Allowed that we can initialize the vairible without explicitly assigned any valued in it.
name = "Alice";

//Temporal Dead Zone 
// console.log(MY_LET_VAR);  //This gives  error becouse you access it before initializing it 
let MY_LET_VAR = "Now you can access it";


//VAR 

//Function Scop (not Blck Scop)

if(true){
    var leak = "I am visible outside the if-block";
}
// console.log(leak); // output-> "I am visible outside the if-block"


// Hoisting Behavier

// console.log(myVar);  //ReferenceError: myVar is not defined

//Redeclaration
var x = 10;
var x = 20; //Allowed

console.log(typeof function(){})