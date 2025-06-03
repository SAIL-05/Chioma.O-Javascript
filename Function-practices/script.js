// Write an arrow function that divides two numbers.

// function divide(a, b) {
//     console.log(a / b);
// }
// divide(10, 2);
// console.log(divide(10, 2));


// // Write a function that checks if a number is even or odd.
// function isEvenOrOdd() {
//     const num = parseInt(prompt ("enter a number"))
    
//     if (num % 2 === 0) {
//         alert(num + " is even");
//     } else {
//         alert (num + " is odd");
//     }
// }
// isEvenOrOdd();



// write a fuction that returns the largest number
// function largestNumber(num1, num2,num3) {
//      num1 = parseInt(prompt("enter first number"));
//      num2 = parseInt(prompt("enter second number"));
//      num3 = parseInt(prompt("enter third number"));
//      console.log (Math.max(num1, num2, num3));

// }
// largestNumber();


// write a function that reverses a string
function reverseString(input) {
    input = 'hello world';
    return input.split('').reverse().join('');

    }

    console.log(reverseString('hello world'));
// // Asynchronouu JS
// // Javascript excutes in a serial order
// // while some code taakes a longer times asynchronous help you to
// // to execute many codes
// // by default JS is synchronous
// // but we can make it asynchronous


// console.log(" first task");
// console.log(" second task");
// console.log(" third task");
// console.log(" fourth task");
// console.log(" continue task");


// // setTimeout is an asynchronous function
// setTimeout(() => {
//     console.log("this is a callback function");
// }, 2000); // 2000 milliseconds = 2 seconds

// // a callback function is a function that is passed as an
// //  argument to another function

// const caller = (callback) => {
//     console.log("caller function");
//     callback();
// }

// // The Fetch API 
// // Types of requests
// // get, post, put, delete
// // get request is used to fetch data from a server
// // post request is used to send data to a server
// // put request is used to update data on a server
// // delete request is used to delete data from a server
// const fetchData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("There has been a problem with your fetch operation:", error);
//     }
// }

// // .then(() => {
// //     console.log("Data fetched successfully");
// // })      
// // .catch((error) => {
// //     console.error("Error fetching data:", error);
// // });     

// //Get method
// console.log("https://jsonplaceholder.typicode.com/users");
// fetch("https://jsonplaceholder.typicode.com/users").then
// (res => res.json())
// .then(data => console.log(data));
// catch(error => console.error("Error fetching data:", error));


// //ES6 Fetch API
// // The Fetch API is a modern way to make HTTP requests in JavaScript.
// //
