const orderDetail = {
    orderId:12212,
    food:["pizza","briyani","coke"],
    cost:638,
    customer_location:"Dwarka",
    restaurant_location:"Delhi"
}

function placedOder(orderDetail,callback) {
    console.log(`${orderDetail.cost} payment is in progress`)
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Payment is recived and order get placed");
        orderDetail.statu = true
        resolve(orderDetail)
    },3000)
    } )

}


function preparingOder(orderDetail,callback){
     console.log(`your food prepration is started ${orderDetail.food}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("your order  is prepared");
        orderDetail.token = 123;
        resolve(orderDetail)
     },1000);
    })
     
}


//for pickup order

function pickupOrder(orderDetail,callback){
    console.log(`delivery boy is on way to pickup the Order from ${orderDetail.restaurant_location}`);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("I have pickup the Order");
        orderDetail.received = true
        resolve(orderDetail)
    }, 3000);
    })
    
}


//Order is placed
function deliverOder(o){
    console.log(`I am on the way to  deliver the order to ${orderDetail.customer_location}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("Order Delivered succesfully");
        orderDetail.delivery = true
        resolve(orderDetail)
    },3000)
    })
    
    
}

//This is callback Hell
// placedOder(orderDetail ,(orderDetail)=>{
//     preparingOder(orderDetail,(orderDetail)=>{
//         pickupOrder(orderDetail,(orderDetail)=>{
//             deliverOder(orderDetail)
//         })
//     })
// });
  
// const callback = ()=>{
//     preparingOder();
// }

//Promisified Version
placedOder(orderDetail)
.then((orderDetail)=>preparingOder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail)
})
.catch((error)=>{
    console.log("Error: ",error);
    
})