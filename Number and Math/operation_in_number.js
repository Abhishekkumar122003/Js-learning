let a=10;
let b=365.345534;
// console.log(b.toFixed(4)); // --> it roundoff the  integer's after decimal number
// output is 365.3455
// console.log(b.toPrecision(5)) // =>o/p->365.35 it take digit preciesly
// console.log(b.toString());//convert it into string
// how to create  the number in the object methon bt not used 
let num1 = new Number(20)
let num2 = new Number(20)
let num3 = num1; 
// console.log(num1===num2) 

// ----------------MATH Librery------------------------
// console.log(Math.LN10(20));//-> log10 base20
// console.log(Math.abs(-3));//-> o/p> 3 
// console.log(Math.ceil(6.95));//->o/p >7
// console.log(Math.floor(6.7));//->o/p > 6
// console.log(Math.PI);// output-> value of ⫪
// console.log(Math.max(20,22,432,435,238));//o/p->435

//-----------------Mathe.Random()-------------------
console.log(Math.random());
// Print the  number from 1 to 10
console.log(Math.floor(Math.random()*10)+1)

// Print the  number from 1 to 6
console.log(Math.floor(Math.random()*6)+1);

// Print the  number from 15 to 25
console.log(Math.floor(Math.random()*11)+15);

//Formula => Math.floor(Math.random()*(max -min + 1)+min) -> Math.floor(Math.random()*(25 -15 + 1)+15)




