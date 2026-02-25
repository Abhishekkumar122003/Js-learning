const orderDetails={
    orderId:12345,
    food:["briyani", ' coold drink'],
    cost:650,
    customer_name:'Rohit Negi',
    customer_location:'Dwarka',
    restaurant_location:"Delhi",
}; 
function placeorder(orderDetails ,callback ){

    console.log(`your payment of ${orderDetails.cost} is in progress `);

    setTimeout(()=>{
        console.log(`payment is received and order of ${orderDetails.food} is get placed`);
       callback(orderDetails);
    },3000)
}


function  preparingOrder(orderDetails , callback){
    console.log(`your  ${orderDetails.food} preparation started`);

    setTimeout(() => {
        console.log(`your food is prepared`);
        callback(orderDetails);
    }, 5000);
}

function pickupOrder( orderDetails , callback){
    console.log(`delavery boy is on way to pickup you Order from ${orderDetails.restaurant_location}`);
    
    setTimeout(() => {
        console.log(`Delavery boy is picked up your Order `);
        callback(orderDetails);
    }, 6000);
}

function delaviringOrder(orderDetails){
    console.log(`delavery boy is on the way to deleverd your order and your location is ${orderDetails.customer_location}`);

    setTimeout(() => {
        console.log(`Order is delavered successfully`);
        
    }, 1000);
}

placeorder(orderDetails, (orderDetails)=>{
    preparingOrder(orderDetails ,(orderDetails)=>{
        pickupOrder(orderDetails , (orderDetails)=>{
            delaviringOrder(orderDetails)
        })
    })
})








// const callback =   ()=>{
//     preparingOrder()
// }

// This syntex is used when we want to pass a "CALLBACK" inside a "CALLBACK"