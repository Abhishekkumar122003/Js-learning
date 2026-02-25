// forEach, filter, reducer, map, set
const arr = [20,33,54,44,67,99,87];
let sum =0;
arr.forEach((number) => {
    if(number%2==0){
                    sum+=number //even element sum
                    }
});
// console.log(sum);


// filter

const newArr= arr.filter((number)=>number>65)
// console.log(newArr);

// Behind the sceane, how filter method work
// Let's build our own filter method from scratch

// arr.filtering = function (callback){
//     let ans=[];   
//     for (let num of this) {
//             if(callback(num)){
//                 ans.push(num)
//             }
//        }
//        return ans;
// }

// const newARR= arr.filtering(())
let callback=function(num){
    if (num>25) 
        return true
    }

// console.log(typeof callback)
arr.filtering = function (compare){
    let ans=[];
    for (let num of this) {
        if (compare(num)) {
            ans.push(num)
        }
    }
    return ans;
}

const newARR= arr.filtering(callback)
// console.log(newARR);
let newARR2= arr.filtering((num)=>num>50)
// console.log(newARR2);



/*
  How to make it for generlise method which is used by any ARRAY
*/

Array.prototype.filters= function(compare){
    const ans =[];
    for (let num  of this) {
        if (compare(num)) {
            ans.push(num)
        }
    }
    return ans;
}

newARR2 = arr.filters((num)=>num>70)
// console.log(newARR2)


// MAP

// const ans =products.map((products)=>({name:products.name, price:products.price}))
/* trying to create my own map()
prototype.Map=function(object){
    for (let key of Object.keys(this)) {
        console.log(key);
        
    }
} 
    wrong    
*/




// Reduce method

// const totalPrice=products.reduce((accumulator, currenvalue)=>{
    
//         return accumulator+currenvalue.price
//     },0)




    // Data Structure 1.SET

    const array = [20,33,54,44,67,99,87,20,33,54,44,67,99,87]

    // console.log(array)
    const s1 = new Set(array); 
    // console.log(s1)  //outpit=>Set(7) { 20, 33, 54, 44, 67, 99, 87 } , set bus repeted value koo sirf ek bar hee store krta hai 
    s1.add(11)      // element add krne kaa trika 
    console.log(s1)

    // console.log(s1.has(11)) // "has()" check whether the element is present in an array or not
    // console.log(s1.has(1))
    // s1.delete(33)
    
    // How to convert ARRAY from SET
    const uniquerray =[...new Set(array)]
    console.log(uniquerray)