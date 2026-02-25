// ARRAY
let marks1=88
let marks2=70
let marks3=100
let marks4=90
//insted we can create an Array
let Marks=[88,70,100,99]
//then we can get the element of Array
// console.log(Marks);//output whole array element 
// console.log(Marks.length);//output length of array

// We can store multiple type data
let arr=[11,"sdfsd",2.2,true]

// how to get specific index element of array
// console.log(arr[0]); //->o/p=>11

//how to change specific index element of array
arr[0]=23
// console.log(arr[0]); //o/p>23

//  PUSH operation for inserting the element from end of array

arr.push(99)
arr.push("asda")
// console.log(arr); //[ 23, 'sdfsd', 2.2, true, 99, 'asda' ]

// POP operation for deleting the element from end of array

arr.pop();
// console.log(arr);//  [ 23, 'sdfsd', 2.2, true, 99 ]


// starting place pr bhi element ko hum insert kr skte hai

arr.unshift(10);

// console.log(arr);

//  starting place pr bhi element ko hum  delete kr skte hai    
arr.shift();
// console.log(arr)

// but don't use unshift or shift method couse it reduce dirasticaly  the performance 


// SLICE in Array
const Arr=[12,43,44,6,98,89];
const Arr2=Arr.slice(0,3)
// console.log(Arr2);

const Arr3=Arr.splice(1,3,10,9)
// console.log(Arr3);

//--------------- How to join Arrays ------------------------// 
const arrr1=["qwe",12,34]
const arrr2=["qwe",78,98,true]

// arrr1.push(arrr2)
// console.log(arrr1);//[ 'qwe', 12, 34, [ 'qwe', 12, 34, true ] ]

const Arr4= arrr1.concat(arrr2,Arr)
// console.log(Arr4);


// ---------------------Important  Topic SPREAD operator -----------------------------//

const Array = [...arrr1,...arrr2,...Arr,...Arr2,...Arr3,...Arr4]
// console.log(Array);


//=========How to SORT an ARRAY=================//
const NUM =[12,43,44,6,98,89];
NUM.sort((a,b)=>a-b) //---------- ASCENDING ORDER -------------------//
// console.log(NUM);
NUM.sort((a,b)=>b-a) //================ DECENDING ORDER ============//
// console.log(NUM);
NUM.name="Rohit";
console.log(NUM);
