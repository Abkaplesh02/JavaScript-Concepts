console.log("Namaste JS Season 2");

// The callbacks func is powerful thing to do async things in js.
// Async programming in js exists bcz call back exists.

// Issues with callback::
// 1.Callback hell:::
// one callback inside another callback and it goes on.
// This leads to grow our code horizontally and makes our code unreadable and unmaintainable.
// This structure of callback hell is also known as pyramid of doom.

// 2.Inversion Control:::
// Losing control of our own code by using callbacks.
// When we have callback function and we pass to so another function , we are giving control of our code to some other api,which we maybe don't know the code.


// Promise :: A promise is an object representing the eventual completion or failure of an async operation.
// They are used to handle async operations in js.
// Promise objects are immutable.
// They are resolved only once.

// Promise is nothing but empty object with data and value as undefined.This promise objects fill automatically after some time.
// Whenever promise gets the data , it will execute the callback function attached to it using .then.

// Fetch()=>API given by browser to make external calls.
// This return us promise.

// 2 things in promise
// 1. State of promise
// Pending,fullfilled,Rejected
// 2.Result of promise
// The store data returned by fetch() method






// Call back hell and inversion control problems are handled using promise object.
// Promise chaining is used to control call back hell


// The constructor of promise takes function which takes resolve and reject as parameters.
// These resolve and reject are functions which are given by js to build promises.

// This promise chaining help to get rid of call back hell.




// const cart=["Shoes","pant","Kurta"];

// const promise=CreateOrder(cart); //This api will create promise which will return order id in it.

// console.log(promise);

// promise.then(function(orderId){
//     console.log(orderId);
//     return orderId;
// })
// .then(function(orderId){
//    return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
//     return paymentInfo;
// })
// .catch(function(er){
//     console.log(er.message);
// })
// // .then(function(paymentInfo){
// //     return showSummary(paymentInfo);
// // })
// .then(function(summary){
//     console.log(summary);
// })

// // How to create promise
// // Promise to create order api
// function CreateOrder(cart){
//     const pr=new Promise(function(resolve,reject){
//         if(validate(cart)){
//             const er=new Error("Cart is not valid");
//             reject(er);
//         }
//         const orderId="12345";
//         if(orderId){
//             resolve(orderId);
//         }
//     })
//     return pr;
// }


// // Promise to proceed to payment
// function proceedToPayment(orderId){
//     return new Promise(function(resolve,reject){
//         resolve("Success");
//     })
// }

// // Promise to show summary
// function showSummary(paymentInfo){
//     return new Promise(function(reject,resolve){
//         if(paymentInfo=="Success"){
//             resolve(cart);
//         }
//         const er=new Error("cart is not visible");
//         reject(er);
//     })
// }


// function validate(cart){
//     return false;
// }



const cart = [
    {
        itemName : 'Shoes',
        itemPrice : 2000
    },
    {
        itemName : 'Paint',
        itemPrice : 2500
    },
    {
        itemName : 'Kurta',
        itemPrice : 1500
    }
];

let walletBalance = 10000;

createOrder(cart)
    .then(function(orderId){
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(orderStatus){
        return showOrderSummery(orderStatus);
    })
    .then(function(orderHistory){
        return updateWallet(orderHistory);
    })
    .then(function(res){
       console.log(res);
    })
    .catch((err)=>{
        console.log(err.message)
    })

function createOrder(cart){
    return new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            reject(new Error("Cart is not valid"));
        }
        let orderId=10
        if(orderId){
            resolve(orderId);
        }
    })
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        if(orderId){
            resolve({paymentStatus : 1, message : "Payment successfully completed"});
        }else{
            reject(new Error("Payment Failed"));
        }
    })
}

function showOrderSummery(orderStatus){
    return new Promise(function(resolve,reject){
        if(orderStatus.paymentStatus === 1){
            resolve({status:'success', orders : cart});
        }else{
            reject(new Error("Something went wrong"));
        }
    })
}

function updateWallet(orderHistory){
    return new Promise(function(resolve,reject){
        if(orderHistory.status === 'success'){
            let orderAmount = 6000;
            walletBalance = walletBalance - orderAmount;
            resolve({balance : walletBalance, 'message':'Wallet updated'});
        }else{
            reject(new Error("Wallet balance not updated"));
        }
    })
}

function validateCart(cart){
    return true;
}