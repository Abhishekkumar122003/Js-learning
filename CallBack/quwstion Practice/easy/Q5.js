// function customFilter(arr, callback){

// }
// function hello(ms){
//     setTimeout(()=>{
//     console.log("hi");
//     },ms)
// }

// hello(3000)

// function headler() {
//     console.log("handler direct passing")
// }





const orderData = {
    orderId: 56445,
    food: ["biryani", " cold drinks"],
    cost: 650,
    customer_name: "Rohit Negi",
    customer_location: "Dwarka",
    restaurant_location: "Delhi",
};

function placeOrder(orderDetails, cb) {
    console.log(`Your payment of ${orderDetails.cost} is in progress`);
    setTimeout(() => {
        console.log(
            `Payment received and your order of ${orderDetails.food} is being placed`,
        );
        cb(orderDetails);
    }, 4000);
}

function prepare(orderDetails, cb) {
    console.log(`Your  ${orderDetails.food} order preparation has started`);
    console.log(`${orderData.tips}`);
    
  
  
    setTimeout(() => {
        console.log(`Your food is prepared`);
        cb(orderDetails);
    }, 5000);
}

function pickup(orderDetails, cb) {
    console.log(
        `Delivery partner is on the way to pickup you order from ${orderDetails.restaurant_location}`,
    );
    setTimeout(() => {
        console.log(`Delivery partner has picked up your order`);
        cb(orderDetails);
    }, 6000);
}

function deliver(orderDetails) {
    console.log(
        `Delivery partner is on the way to deliver your order, to your location in ${orderDetails.customer_location}`,
    );
    setTimeout(() => {
        console.log(`Order was delivered successfully`);
    }, 1000);
}

console.log("Starting order process!");


// placeOrder(orderData, (paymentDetails) => {
//     // orderData.tips=4;
//     paymentDetails.tips=4;
//     prepare(paymentDetails, (prepDetails) => {
//         pickup(prepDetails, deliver);
//     });
// });

placeOrder(orderData, ()=>{
    prepare()
})
