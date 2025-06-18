//Write a program that calculates the ticket price based on age with the following conditions: 
// age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 
// pay a ticket price of 20, age over 60 play a ticket price of 15.

// let age = parseInt(prompt('Enter your age'))
// let discount;

// if (age >= 60){
//     discount = 15
//     alert(`you have a discount of $${discount}`)
// }
// else if (age >= 18 && age < 60){
//     discount = 20
//     alert(`you have a discount of $${discount}`)
// }

// else if (age >= 12 && age < 18){
//     discount = 10
//     alert(`you have a discount of $${discount}`)
// } 

// else if (age <= 0){
//     alert(`enter a valid age number`)
// }

// else{
//     discount = 5
//     alert(`you have a discount of $${discount}`)
// }



//Write a program that determines if a year is a leap year.

let days = parseInt(prompt('Enter the number of days in a leap year'))

if ( days = 366){
    alert(`It's a leap year`)
}
else if (days == 365){
    alert(`I's not a leap year`)
}
else if (days > 366 ){
    alert(`not a leap year`)
} 
else {
    alert(`incomplete`)
}

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount 
// have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let age = parseFloat(prompt('Enter amount of purchases'))
let discount;
let total;

if (amount >= 100){
    discount = 20
    total = amount - discount
    alert(`total price is $${total} and your discount is $${discount}`)
}
else if (amount >= 50){
    discount = 10
    total = amount - discount
    alert(`total price is $${total} and your discount is $${discount}`)
}

else{
    discount = 0
    alert(`total price is $${amount} and your discount is $${discount}`)

} 

// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good 
// evening based on the time of day when you run the code.



// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players
//  clues if their guess is higher, lower or correct.


let number = Number(prompt('Enter a Number'))


if (number > 0){
    alert(`${number} is a positive number`)
}
else if (number === 0){
    alert(`${number} is invalid`)
}
else if (number.toString()){
    alert(`is not a number`)
}
else{
    alert(`${number} is a negative number`)
}


let num1 = Number(prompt('enter num1'))
let num2 = Number(prompt('enter num2'))


if (num1 > num2){
    alert(`${num1} is greater than ${num2}`)
}
else if (num1 === num2){
    alert(`${num2} and ${num1} is equal `)
}
else if (num1.toString() || num2.toString()){
    alert(`please input just a number`)
}
else {
    alert(`${num2} is greater than ${num1}`)
}




let grade = Number(prompt('Enter your Grade'))


if (grade >= 70 && grade <= 100){
    alert(`you scored ${grade} A`)
}
else if (grade >= 60 && grade <= 69 ){
    alert(`you scored ${grade} B`)
}
else if (grade >= 50 && grade <= 59 ){
    alert(`you scored ${grade} C`)
}
else if (grade >= 45 && grade <= 49 ){
    alert(`you scored ${grade} D`)
}
else if (grade >= 40 && grade <= 44 ){
    alert(`you scored ${grade} E`)
}
else if (grade > 0 && grade <= 39 ){
    alert(`you scored ${grade} F`)
}
else if (grade.toString()){
    alert(`your score is not a number`)
}
else {
    alert(`you scored ${grade} is invalid`)
}
















