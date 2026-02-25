
// Function is create  using function keyword

function greeting(){
    console.log("hello ");
}
// console.log( greeting());
// Rest Operator used whenever multiple value is given as argument into the function, it just create an ARRAY of the value
function addNumber(...num) {
    let sum=0
   for (let n  of num) {
        sum+=n;
   }
    console.log(sum);
    
}

// addNumber(5,6,7,9)
// addNumber(5,6,7,999,555)
// addNumber(98987,5654,6465,5658)

//Function Expression

const sumNumber =function(num1,num2){
    return num1+num2
}
// console.log(sumNumber(2,2))

/*
    Arow function
    syntax-> ()=>{
        }

    
*/

const AddTwoNumber=(num1, num2)=>{
    return num1 + num2; }
const value=AddTwoNumber(2,6)
// console.log(value)

/**Here you can also write (num1, num2)=>num1 + num2; 
 without using return keyword or curly breses{} becouse only one stateman is given
 */

//Example 
let arr =[34,978,2,54,1,0]
arr.sort((a, b)=>a-b);
// console.log(arr)

/**
 * And if you have one/single parameter no need to "()"
 */
//EXAMPLE
const Square = num=>num*num;
// console.log(Square(3))

//EXAMPLE 2
const greet = ()=> ({name:"Rohit",age:28})
// console.log(greet());



// IIFE=> Imediately Invoke Function Experssion () ()
// (function Imediately(){
//     console.log("Hello")
// }) ()


//------------- CALLBACK FUNCTION --------------
function greets(callback){
    console.log("i jusr start the meeting");
    callback();
    console.log("The meeting end");
    
}
function meet(){
    console.log("This is meeting");
    
}
function dance(){
    console.log("This is dance");
    
}

greets(meet)
greets(dance)
