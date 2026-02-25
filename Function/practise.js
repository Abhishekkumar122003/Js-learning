function hello(){
    console.log("hello");
}

// hello()
//rest operator ""...num"
function sum(...num){
    let sum=0;
    for(let n of num){
        sum+=n
    }
    return sum;
}

let val1= sum(2,33)
let val2 = sum(2,33,3)
// console.log(val1)
// console.log(val2)

let arr = [1,43,56,-56,7];
let arr2 = [1,43,56,-56,7,90];
let val3 = [arr,arr2]
// console.log(arr)
// console.log(arr2)
// console.log(val3);


//function: Expression

let addNumber = function(num1,num2){
    return  num1+num2;
    
}
// console.log(addNumber(4,68))


//Arrow function:
const arrow = ()=>{
    console.log("hello jee")
}

// arrow()

//arrgument pass
const arrowadd = (num1,num2)=>{
    return num1+num2;
}
// console.log(arrowadd(2,3))

//jb hume agr sirf ek chij return krva rhe hote hai to hume koin "{return num1+num2}" krrne ka jrurt nhi hai.
/**Example */ const arrows = (num1,num2)=>num1-num2; 
;
// console.log(arrows(22,22))

//aur jb agr sirf ek hee arrgument hoo to us wakt tum koo "()" dene ka bhi jrurt nhi hai;
const square = num=> num*num;

// console.log(square(4))

//and if you need to return object through arrow function we do like this
const obj = ()=>({name:"rohit chutiya", age:30});
// console.log(obj());



//Immidiat invoke function Expression IIFE
// (function(){
//     console.log("hello IIFE function is there everything all right")
// })();
// (function greet(){
//     console.log("hello IIFE function is there everything all right")
// })();
// (()=>{
//     console.log("IIFE ")
// })();

//CALLBACK function -> Means the function is given to other function as an "Arrgument"  
function greet(){
    console.log("hello jee kaise hoo");
}

function meet(CALLBACK){
    setTimeout(CALLBACK,3000)
    CALLBACK();
}

// meet(greet);
console.log(a);
var a =10;