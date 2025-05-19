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