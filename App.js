// Js is a synchronous single threaded language.

// Hoisting is done bcz of memory creation phase of general execution context. The variables and functions are allocated memory even before the execution of code starts.That's why we can access variables and functions even before they are initialised.

// Undefined is special type of placeholder which is assigned during memory creation phase of execution context, untill value of variable is assgined to it. After value is assigned to var, undefined is replaced by that value.

// console.log(2);
// console.log(square)
// console.log(n);
// var n=2;
// function square(num){
//     var ans=num*num;
//     return ans;
// }
// console.log(square(12));



// Whenever we create executional context , a this is created along with global/window object , even for the functional executional context and even for global executional context.


// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }

// Lexical enviorment is local memory along with reference to lexical enviorment of its parent.

// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }
// a();

// console.log(b);


// Temporal Dead Zone: This is time since when the let variable was hoisted and till it is intialised some value.
// Let and const declaration are hoisted. They are in temporal dead zone.

// console.log(a);
// let a=10;
// a=20;
// let a=20;
// let can't be redeclared with same name.

// console.log(a);
// console.log(b);
// const b=10;;

// let and const can't be accessed before initialisation.They are in temporal dead zone till then.
// Always try to keep initialisation and declaration at the top of the scope to avoid Temporal dead zone.
// let and const are block scoped
// var is global scoped


// const a=10;
// {
//     const a=20;
//     console.log(a);
//     {
//         const a=30;
//         console.log(a);
//     }
// }
// console.log(a);


// Closures: A function bundled together with its lexical scope/enviorment.

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// z();

// Functions when returned from another function they still maintain their lexical scope.


// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }

// z();

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },5000);
//     console.log("Namaste javascript")
// }
// x();

// The setTImeout register the callback function with timer attached to it and stores it 
// at some other memory space untill timer expires.
// After the timer expires the function moves to call back queue and wait for it's turn in callBack queue.
// When call back queue is empty , event loop will move function from call back queue to call stack for execution.


// Print 1 to 5 and print every number after number *1000 microseconds.
// function x(){


// for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }
// console.log("namaste javascript");
// }

// x();


// When the function is called , for loop runs for i=1 and setTimeout register the call back function with timer attached to it .
// for all the values of i the setTimeout creates callback with timer and sent them to some other memory.
// Untill then the other code executes.
// Now when timer finishes the callback functions started reaching call back queue.
// It will start executing function :: but it is printing 6 instead of 1,2,3,4,5,6
// because i has already been updated to 6 in for loop and since var has global scope.
// The reference stored in call back will point to updated i and print 6.

// We can solve this using by using let instead of var since it has block scope.

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("namaste javascript");
// }

// x();


// We can also solve it using var using closures by puting setTimeout in function , this will create closure.

// function x(){
//     for(var i=1;i<=5;i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i);
//             },i*1000);
//         }
//         close(i);  
//     }
//     console.log("Namste javascript");
    
// }
// x();

// function close will create closure with each value of i and call it during execution.


// Disadvantages of Closures:: 
// 1.OverConsumption of memory.
// 2.Leads to memory leak.

// Functions

// Function Statment 
// THe word function with name of function written ahead is function statement.
// Ex:
function mast(){

};

// Function Expression
// Assigning value of function to variable
// Ex: 
var b=function(){

};

// Anonymous function
// Functions without names are anonymous functions.
// They are used at places where functions are used as values.
// function(){

// };

// Named function expression
// When we use function statement and assign its value to variable
// ex: 
var c=function map(){
    
};

// First class functions
// The ability of functions to be used as value and can be passed into another functions as arguements and can be returned from the functions.This ability is known as first class funcitons.
// Also known as first class citizens.
// Ex: 
function a(other){
    return function(){

    }
};
// passing function into another function and returning function 

function mask(){

};

a(mask);


// What is callback function in Js?
// When we are passing one function into another function, the function we are passing is known as callback function.

// Blocking the main thread means blocking the call stack.If any complex function came to execute that takes time, it will block call stack as Js is single threades synchronous language.Using setTimeout and callbacks we are able to use async operations and prevent call stack from being blocked 


// Event Listner
document.getElementById("Click me").addEventListener("click", function abc(){
    console.log("Button clicked");
});


// Event listner with closure
function attackEvent(){
    let count=0;
    document.getElementById("Click me").addEventListener("click",function abc(){
        console.log("Button Clicked" + " " +  (++count))
    })
}
attackEvent();

// Why do we need to remove event listner on certain events
// Event listner are heavy. They takes memory when we attach event listner , they form closure. Even when callstack is empty , these eventlistner do not free up memory bcz they can be called anytime.
// So we try to remove eventlistner not in use and Js garbage collection remove the variable in scope of event listner and free up the space.


// Concurrency Model of JS

// 1. Js known for its single threaded synchronous nature , possesses a concurrency model.
// 2.At its core , JS concurrency involes managing multiple tasks concurrently , offering unique set of tools like Web Apis and approach to overcome the limitation of its single threaded language.
// 3. Concurrency juggles multiple tasks in overlapping time interval.
// 4.Js event driven , non blocking architecture sets the stage for its unique approach to concurrency.
// 5. Async programming lies at the heart of Js concurrency model.Whether its fetching data from API , reading files, async operations , prevent the dreaded main thread blockage.i:e: call stack ensuring your application remains responsive and efficent.
// 6.With concurrency model , we can do asynch operations in single threaded synch language.
// 7.Event loop , plays major role in concurrency model poping out functions form queues to call stack for execution.


// Higher order function:: The functions which takes another fuction as an arguement or returns function from it, is higher order function.

function x(){
    console.log("Namaste ");
}
function y(x){
    x();
}

// Function (y) is higher order function , where x is callback function.

// Benefits of functional programming
// 1.Reusability
// 2.Modularity
// 3.How you pass function to different function


// Dumb way of writing code

// const radius=[3,1,2,4];

// const Area= function(radius){
//     const output=[];
//     for (let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// };

// const Circumference=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }

// const Diameter=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }

// console.log(radius);
// console.log(Area(radius));
// console.log(Circumference(radius));
// console.log(Diameter(radius));


// Writing same code using functional programming

// const radius=[3,1,2,4];

// const area=function(radius){
//     return Math.PI*radius*radius;
// }
// const Circumference=function(radius){
//     return 2*Math.PI*radius;
// }
// const Diameter=function(radius){
//     return 2*radius;
// }

// // const Calculate=function(radius,logic){
//     Array.prototype.Calculate=function(logic){
//     const output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.Calculate(area));
// console.log(radius.Calculate(Circumference));
// console.log(radius.Calculate(Diameter));

// console.log(Calculate(radius,area));
// console.log(Calculate(radius,Circumference));
// console.log(Calculate(radius,Diameter));

// var g=12;
// console.log(g.toString(2));
// Shortcut to convert to binary


// [].map() , [].filter() , [].reduce() ::: These are higher order function in java.

// 1. [].map()
// This map function is used to transform array.
// const arr=[5,1,3,2,6];
// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }
// function Binary(x){
//     return x.toString(2);
// }

// console.log(arr.map(double));
// console.log(arr.map(triple));
// console.log(arr.map(Binary));


// 2.[].filter()
// This function is used to filter values inside an array
// const arr1=[5,1,3,2,6];
// function isOdd(x){
//     return x%2;
// }
// function isEven(x){
//     return x%2==0;
// }
// console.log(arr1.filter(isOdd));
// console.log(arr1.filter(isEven));

// 3. [].reduce()
// This function is used when we have to take all the values of array and return single term.

// const arr2=[5,1,32,2,6];
// const output=arr.reduce(function(acc,current){
//     acc=acc+current;
//     return acc;
// },0);

// console.log(output);

// const output1=arr2.reduce(function(acc,current){
//     if(current>acc){
//         acc=current;
//     }
//     return acc;
// },0);
// console.log(output1);

// This reduce function takes 2 arguements : firstly it takes function and second it takes starting point of accumulator.
// The function also takes 2 arguements , current and accumulator.


// const users = [
//     {firstName : "akshay" , lastName : "saini", age : 26 },
//     {firstName : "Abhishek" , lastName : "Kaplesh", age : 24 },
//     {firstName : "Kunal " , lastName : "Kushwaha", age : 23 },
//     {firstName : "Narendra " , lastName : "Modi", age : 24 }
// ]

// const output=users.map((x)=> x.firstName +  " "+  x.lastName);
// console.log(output);

// const output1=users.reduce(function(acc,current){
//     if(acc[current.age]){
//         acc[current.age]=++acc[current.age];
//     }
//     else{
//         acc[current.age]=1;
//     }
//     return acc;
// },{});
// console.log(output1);


// // Find first name of people whose age is less than 30
// const output2=users.filter(x=>x.age<30).map((x)=>x.firstName);
// console.log(output2);

