// Zomato application

function placedOder(callback) {
    console.log("payment is in progress")

    setTimeout(()=>{
        console.log("Payment is recived and order get placed");
        preparingOder()
    },3000)
}


function preparingOder(callback){
     console.log("your food prepration is started");

     setTimeout(()=>{
        console.log("your order  is prepared");
        pickupOrder()
     },1000);
}


//for pickup order

function pickupOrder(callback){
    console.log("delivery boy is on way to pickup the Order");
    setTimeout(() => {
        console.log("I have pickup the Order");
        deliverOder()
    }, 3000);
}


//Order is placed
function deliverOder(){
    console.log("I am on the way to  deliver the order");
    setTimeout(()=>{
        console.log("Order Delivered succesfully");
        
    },3000)
    
}

//This is callback Hell
placedOder(()=>{
    preparingOder(()=>{
        pickupOrder(()=>{
            deliverOder
        })
    })
});
  