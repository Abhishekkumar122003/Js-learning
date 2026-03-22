if(4%2){
    // console.log("not even");
    
}else{
    // console.log("even");
}

// == (Loose Equality): Compares two values for equality after performing type coercion (automatic type conversion). AVOID THIS OPERATOR. It has complex rules and can lead to very confusing bugs. code JavaScript


// console.log(7 == "7");   // true (string "7" is coerced to number 7)
// console.log(0 == false); // true (boolean false is coerced to number 0)

// === (Strict Equality): Compares two values for equality without performing type coercion. It checks if both the value AND the type are identical. ALWAYS PREFER THIS OPERATOR. code JavaScript


// console.log(7 === "7");   // false (number is not a string)
// console.log(0 === false); // false (number is not a boolean)


// Ternary Operator

let age =29;
let message = (age>18)? "you can vote" : "No you can't vote";
// console.log(message);


// Type conversion

// 1.String
let num = 123;
let strnum = String(num);

// 2.Number

let str = "99.5";

let number = Number(str);
// console.log(number);

let invalidStr = "apple";
let notANumber = Number(invalidStr); // o/p -> NaN

let Num=122;
let NNum = '122';
if(Num === NNum){
    console.log("hi");
}