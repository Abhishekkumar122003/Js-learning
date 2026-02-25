// Method => foreach, filter, reducer, map, set


//ForEach Loop
let arr =[21,76,34,99,10];
arr.forEach((number,index,arr)=>{ //=> it gives each element one by one and it's index, or even whoel array
    // console.log(number,index,arr);
})

//Uses -> find sum of al elements
let sum=0;
arr.forEach((element)=>{
    sum+=element;
    // console.log(sum);   
})

// Filter is use on array when we want to select selective elemnent, example->above arr =[21,34,76,99,10] and ypu want to select element above 30.
// and it return new array, means it can't changes the original array;


const newarr=arr.filter((number)=>number>30); //if condition is true select the element if not reject it
// console.log(newarr)
//how to create our own filter method
arr.filtering = function(campare){  // this method i create is only for the "arr" which i create above and it is niot not for general arrays 
    const ans=[];
    for(let num of arr){
        if(campare(num)){
            ans.push(num);
        }
    }    
    return ans;
}
const newArr = arr.filtering((num)=>num<=38);
// console.log(newArr)


// So, how to create filtering method for every/general arrays
Array.prototype.filterings= function(campare){
    const ans =[];
    for(let num of this){  /* prototype kai jgha pr tum this or Array bhi likh skte hoo */
        if(campare(num)){
            ans.push(num);
        }
    }
    return ans;
}
const arrs=[897,12,4590,12]
const newarrays =  arrs.filterings((num)=>num>70);
// console.log(newarrays);



// practical use 
const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

//filter the product based on price 
const newproduct = products.filter((product)=>(product.price>20)).sort((a,b)=>a.price-b.price).map((product)=>({name:product.name,price:product.price}));
console.log(newproduct)




//MAP => tumhe vhi deta hai jo tum magte ho 
const answer = products.map((product)=>({name:product.name,price:product.price}))
console.log(answer);


//REDUCER  