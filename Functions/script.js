// //Function Declaration
// function greet (name) {
//     let name2 = name;
//     console.log("Hello, world" , name , gender);
// }
// greet ('chioma', 'female' ,'28')
// greet ('Sam', 'male' ,'30')
// returnSumOfNumber(2,3)


// //function declaration
// let returnSumOfNumber = function (a, b) {
//     let sum = a + b;
//     console.log(sum);
//     return sum;
// }

// // function expression
// returnSumOfNumber(2,3,5)
// greet ('chioma')


// // prompt('Enter any number');
// function takeInputfromeUser() {
//     prompt('Enter any number');
//     console.log(userInput);                   
//     return userInput;
// }

// // Create a fuunction that takes a number 
// // from a user and check if the number is greater than 6
// function checkNumber() {
//     let num = prompt('Enter a number');
//     if (num > 6) {
//         console.log('The number is greater than 6');
//     }   
// }
// checkNumber(); 
// // checkNumber(7);
// // checkNumber(5);

//create a function that takes input from users and then returns the lenght of characters in the string
// let checkcharacters = function() {
//     let userName = prompt('Enter your name');
//     console.log('Your name is ' + userName.length + 'long');
// }

// checkcharacters();

// create a function that takes four parametters
//  and returns the highest number

function checkHighestNumber(a, b, c, d) {
    let highestNumber = Math.max(6, 8, 9, 5);
    console.log('The highest number is ' + highestNumber);
}
checkHighestNumber(6, 8, 9, 5);