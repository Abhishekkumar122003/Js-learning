
const user ={
    name: "Abhishek",
    age:32,
    emailid:"Abhishek@email.com",
    amount:34000000000
}
// This is, how to apply "for in Loop"
for(let  key in user){
    // console.log(key, user[key])
}

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// destructuring of OBJECT //

const {name,age , emailid, amount}=user
// console.log(name,age, emailid, amount);
// koi or name kai shath nikal naa hoo too
const {name:userName, age:userAge}=user
// console.log(userName,userAge)

// How to apply "For OF Loop"
// we cannot directly apply forOf Loop on object. first we have to convert object into an ARRAY,
// then we can apply ForOf Loop.

for(let key of Object.keys(user)){
    // console.log(key)
    // console.log(user[key])
}

for(let values of Object.values(user)){
    // console.log(values)
}

for(let [keys, values] of Object.entries(user)){
    // console.log(keys,"=>", values)
}

// Nested Object

const user2 = {
    name:"shourya Gupta",
    age:23,
    emailid:"shourya@emial.com",
    amount:34000000000,
    address: {
        city:"Patna",
        state:"Bihar"
    }
}
// console.log(Object.keys(user2.address))

// -------------Important point how to create same object but with different refrence ---------------------
// ----- This is done by destructuring the object. ---------
const user3 = {...user2}

// ---------- Now if we make change in user3 it doesn't affect the user(object) by which user3 is derive. -----------
user3.name = "Abhishek Kumar Gupta"
user3.age=25
user3.amount=35000000
// console.log(user3)
// console.log(user)

// user3.address.city="asd"

// console.log(user2);
// console.log(user3);
/*output=>user2=> {
  name: 'shourya Gupta',
  age: 23,
  emailid: 'shourya@emial.com',
  amount: 34000000000,
  address: { city: 'asd', state: 'Bihar' }
}
  user3=>{
  name: 'Abhishek Kumar Gupta',
  age: 25,
  emailid: 'shourya@emial.com',
  amount: 35000000,
  address: { city: 'asd', state: 'Bihar' }
}
*/

//======HOw to make independent copy. This is done by using method colled structuredClone()

const user4 = structuredClone(user2)
user4.address.city="Danapur"

// console.log(user2);
// console.log(user4);


// How to create symble as KEY in object 
const sym = Symbol("i")
const user5 = {
    name:"shourya Gupta",
    age:23,
    emailid:"shourya@emial.com",
    amount:34000000000,
    address: {
        city:"Patna",
        state:"Bihar"
    },
    [sym]:"Hello ji this is Symbol"
}
console.log(user5[sym])

