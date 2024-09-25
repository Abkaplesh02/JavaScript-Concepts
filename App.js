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
