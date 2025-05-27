// // // console.log(200);

// // let myAge = 34;
// // myAge = 65;

// // console.log(myAge);

// // const yourAge = 67;

// // // yourAge = 45;
// // console.log(yourAge);

// // let age;

// // age = 45;
// // console.log(age);

// //Primitive data types

// // string '' ""

// let mary = "today is mary's birthday";

// // number

// let myNum = 63;

// //boolean
// const me = true;
// const you = false;

// //undefined
// let test;
// console.log(test);

// //null
// let test2 = null;

// test2 = 56;
// console.log(test2);

// // Non-primitive data types
// // objects

// const student = {
//   name: "mary",
//   age: 21,
//   isPregnant: true,
// };

// console.log(student);

// // arrays

// const myArray = ["Timilehin", "rere", 354, true, { name: "mary" }, [2, 4, 6]];
// console.log(myArray[2]);

// // functions

//Arithemetic Operator

// let a = 34;
// let b = 56;

// // Addition
// const sum = a + b;
// console.log(sum);

// //Subtraction
// const subb = a - b;
// console.log(subb);

// //Division
// const div = b / a;
// console.log(div);

// //Mutiply
// const mut = a * b;
// console.log(mut);

// //Modulus
// const modul = b % a;
// console.log(modul);

// //Assignment Operators
// let c = 39
// // +=
// // -=

//Comparism Operators
// const d = "jane";
// const e = "jane";
// const f = "mary";
// const g = 23;
// const h = 47;
// const i = 23;
// const j = "23";

//Equals To
// console.log(d == e);
// //Grater Than
// console.log(g > h);
// //Less Than
// console.log(g < h);
// //Greater than equals to
// console.log(g >= i);
// //Less than equals to
// console.log(g <= i);
// //Not Equals To
// console.log(g != i);
//Strictly Equals To
// console.log(i === j);
// console.log(i);
// console.log(j);

//Logical Operator
// Logical OR ||
// Logical NOT !
// Logiacl AND &

// //Ayo's Admission Details
// const fee = true;
// const uniform = false;
// const textbooks = false;
// const idCard = false;

// const checkOR = fee || !textbooks || uniform || idCard;
// const checkAND = fee && textbooks && uniform && idCard;
// const checkAyo = fee && textbooks;
// const checkAyoAgain = (fee && idCard) || (fee && uniform);
// console.log(checkAyoAgain);
// console.log("from idcard", !idCard);

// //Unary Operator
// // Increment ++
// // Decrement --

// let k = 3;
// k++;
// console.log(k);
// k--;
// console.log(k);

// //Tenary Operator
// // (contition) ? "" : ""

// const tenTest = 76 > 45 ? "Yes This is correct" : "No, That is wrong";

// console.log(tenTest);

//Write a program that tells if a user is legible to vote

// let age = -65;

// let voting = age < 18 ? "You cannot vote" : "You can vote";
// console.log(voting);

//let voting = age < 100 && age >= 18 ? "You can vote" : "You cannot vote";
//console.log(voting);

//const userNumber = parseInt(prompt("Enter a number"));

//if (userNumber > 0) {}

//write a program to determine the greater of two numbers

// const userNumber = parseInt(prompt("Enter a number"));
// if (userNumber > 100) {
//     alert(`${userNumber} is greater`);
// }
// else if (userNumber < 100) {
//     alert(`${userNumber} is less`);
// }
// console.log(userNumber);

// const valueOne = parseInt(prompt("Enter your first number"));
// const valueTwo = parseInt(prompt("Enter your second number"));
// if (valueOne > valueTwo) {
//     alert (`${}`)
// }
// write a program that transforms a numerical grade to a letter grade (e.g grade 0-39) should display "F", grade 40 -44 should display "E", grade 45-49 should display "D", grade 50-59 should display "C", grade 60-69 should display "B", grade 70-100 should display "A").

// const myGrade = parseInt(prompt("Enter your grade"));
// if (myGrade >= 0 && myGrade <= 39) {
//     alert(`your grade is F`);
// }
// else if (myGrade >= 40 && myGrade <= 44) {
//     alert(`your grade is E`);
// }
// else if (myGrade >= 45 && myGrade <= 49) {
//     alert(`your grade is D`);
// }
// else if (myGrade >= 50 && myGrade <= 59) {
//     alert(`your grade is C`);
// }
// else if (myGrade >= 60 && myGrade <= 69) {
//     alert(`your grade is B`);
// }
// else if (myGrade >= 70 && myGrade <= 100) {
//     alert(`your grade is A`);
// }
// else {Write a program that calculate the body mass index (BMI) and categories it. The formula for BMI is: weight / (height * height). The categories are: underweight (BMI < 18.5), normal weight (BMI 18.5 - 24.9), overweight (BMI 25 -29.9), and obesity (BMI >= 30).

// const weight = parseInt(prompt("Enter your weight in kg"));
// const height = parseInt(prompt("Enter your height in m"));

//methods and properties
// properties deals with what we See (features)
// methods deals wuth the action perculiar to the datatype

// properties
// methods are properties of an object that can be used to perform actions
// array /**
//  * 
//  */
// nameBox.push(johanna) {
    
// let studentData = {
//     name: 'mary',
//     score: 100,
// }

// String methods
// let myStr = "Hello, Javascript World!";

// let myName = "Nubi Mary";

// console.log(myStr);
// console.log(myStr.toUpperCase());
// console.log(myStr.toLowerCase());
// console.log(myStr.charAt());
// console.log(myStr.indexOf("Javascript"));
// console.log(myStr.includes("Hi"));
// console.log(myStr.includes("Hello"));
// console.log(myStr.slice(2, 8));
// console.log(myStr.trim());
// console.log(myStr.replace("World", "Universe"));
// console.log(myStr.replace("o", "t"));
// console.log(myStr.split(" "));
// console.log(myStr.split(" ")[1]);;
// console.log(myStr.startsWith("Hello"));
// console.log(myStr.endsWith("Hi"));
// console.log(myName + myStr);


// // Number Methods
// let num = 42.678;
// let strNum = "89.56";

// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed(1));
// console.log(parseInt(strNum));
// console.log(parseFloat(strNum));
// console.log(isNaN("trtr"));

// // Math Methods

// console.log(Math.PI);
// console.log(Math.round(41.673));
// console.log(Math.floor(42.9));
// console.log(Math.ceil(42.1));
// console.log(Math.max(12, 6, 7));
// console.log(Math.min(34, 5, 7));
// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(144));
// console.log(Math.random());
// console.log(Math.random()* 1000);

// console.log(Math.floor(Math.random()* 1000));

// // Objects

// let Student = {
//     name: "Shade",
//     age: 24,
//     email: "mary@gmail.com",
// };

// console.log(Student);
// console.log(Student.name);
// console.log(Object.keys(Student));
// console.log(Object.values(Student));


// // Functions
// function myName(name) {
//     console.log(name);
// }

// myName("Joy");
// myName("Mary");
// myName("Sodiq");

// function addNum (a, b) {
//     console.log(a + b);
// }
//     addNum(16, 34);
//     addNum(23, 45);

// function expression
// function greet (name, gender, score) {
//     let nme2 = name
//     console.log("Hello, world!", name, gender);
// }
// function returnSumof2Numbers(num1, num2,){
//     let result = num1 + num2;
//     console.log(result);  
//       return result;
// console.log("Hello, world!", name, gender)
// }
// sumof3numbers(4, 5, 6)
// greet("Mary", 'female', 90);
// greet("ife", 'male');

// // function declaration
// let sumof3numbers = function(num1, num2, num3){
//     let result = num1 + num2 + num3;
//     console.log(result);
// }

// function getSumofScores (score1, score2){
//     let result = score1 + score2;
//     return result;
// }


// function takeInputFromUser(){
// let userResponse = prompt('Enter any number');
// console.log(userResponse);
// }
// takeInputFromUser();

// function subtractTwoNumbers(num1, num2){
//     let result = num1 - num2;
//     return result;
// }
// console.log(subtractTwoNumbers(23, 58));

//create a function that take any NUMBER From a user and check if that num is greater than 6

// function checkIfGreaterThanSix(){
//     let userResponse = prompt('Enter a number');
//     if (userResponse > 6){
//         console.log (`the number ${userResponse} is greater than six`);
//     }
//     else if (userResponse < 6){
//         console.log (`the number ${userResponse} is less than six`);
//     }
//     else{
//         console.log (`the number ${userResponse} is equal to six`);
//     }
// }
//         checkIfGreaterThanSix();
//create a function that takes inputs and return the character of the input

// function getStringLength() {
//     let userResponse = prompt('Enter a string');
//     let result = userResponse.length;
//     console.log(`The length of the string is ${result}`);
//     return result;
// }
// getStringLength();

// let checkCharacters = function () {
//     let userName = prompt ('Enter your name');
//     console.log('Your name is ' + userName.length + 'long')
// }
// checkCharacters ()

// create a function that takes 4 numbers and return the highest number

// function getHighestNumber(num1, num2, num3, num4) {
//     let highest = num1;
//     if (num2 > highest){
//         highest = num2;
//     }
//     else if (num3 > highest) {
//         highest = num3;
//     }
//     else if (num4 > highest){
//         highest = num4;
//     }
//     return highest;
// console.log(getHighestNumber(27,45, 69, 80));
// }
// console.log(getHighestNumber(27,45, 69, 80));

// getHighestNumber();
// create a function that takes a number and checks if the number is even or odd

// Arrow functions

// const greetMe = () => {}

// create an arrow function that gives the length of userInput
// let lengthOfuserInput = () => {
//     let userInput = prompt('Enter a string');
//     let result = userInput.length;
//     console.log(`The length of the string is ${result}`);
//     return result;
// }

// New way of writing function
// let checkCharacters = () => {}
// instead of 
// let checkCharacters = function () {}
// let checkEvenNumber = () => {
//     let userNumber = prompt('Enter any number');
//     if ((userNumber % 2)=== 0) {
//         console.log ('Number is even');
//     }
// }
// checkEvenNumber();

// // Assignment
// write a composition/article on Hoisting and scope with examples
// create an account on medium. "Javascript hoisting and scope for beginners"

// Write an arrow function that divides two numbers

// let divideTwoNumbers = (num1, num2) =>{
//     let result = num1 / num2;
//     console.log(result);
//     return result;
// }
// divideTwoNumbers(50, 5);

// Write a function that checks if a number is even or odd.
// function checkEvenorOdd(){
//     let num = prompt(`Enter a number`);
//     if((num % 2) === 0){
//         console.log(`${num} is even`);
//     }
//  else{
//         console.log(`${num} is odd`);
//     }

// }
// checkEvenorOdd();

// Write a function to return the largest of three numbers
// function largestofThreeNum(){
//     let num1 = prompt("Enter the first number");
//     let num2 = prompt("Enter the second number");
//     let num3 = prompt("Enter the third number");
//     console.log(Math.max(num1, num2, num3));
    
// }
// largestofThreeNum();

// if (num1 > num2 && num1 > num3){
    //     console.log(`${num1} is the largest number`);
    // }
//     else if (num2 > num1 && num2 > num3){
//         console.log(`${num2} is the largest number`);
//     }
//     else if (num3 > num1 && num3 > num2){
//         largest = num3;
//     }
// }

// }

// Write a function that reverses a string
// let myString = "Hello, World!";
// console.log(myString.split(""). reverse(). join(""));

// function reversemyString (){ 
//     let myString = "Hello, World!";

// console.log(myString.split("").reverse(). join(""));}
// reversemyString();
// Write a function that returns the longest word in a sentence.

// loop
// four loops
// 3 parts of four loops
// initializer
// conditional
// Increment/ Decrement

// function greetMe (name) {

// }
// greetMe('dfdffdfd')
// for(initializer, conditionals, increment){

// }
// if(i< 10)
// for(let i = 0; i < 10; i++){
//     console.log('This is the value of i', i)
// }
// console.log('We are running loops')

// class work
// for(let startingIndex = 1; startingIndex < 50; startingIndex++){
// if( startingIndex % 2 === 0){
//     console.log(startingIndex, 'is an even number')
// }
// else{
//     console.log(startingIndex, 'is an odd number')
// }
// }

// for(let a = 5; a<= 20; a+= 2) {
//     console.log('This is the value of a', a)
// }
// for(let a = 5; a<= 20; a++) {
//     console.log('This is the value of a', a);
// }
// let scores = [1,2,3,4,5,6,7,8,9,]
// for(let b = 0; b < 9; b++){
//     console.log('scores=', b)
// }
//console.log('scores =', scores[b]);

// let scores = [1,2,3,4,5,6,7,8,9,];
// console.log(scores[0])
// console.log(scores[2])
// console.log(scores[4])

// let scores = [50, 60, 70, 80, 90];
// let num = 1;
// let num2 = 1;
// let name = 'ife'
// console.log('ife')
// console.log(name)

// scores[1]=== scores[num] === scores[num2]
// console.log(scores[0]);
// console.log(scores[1]);
// console.log(scores[2]);
// console.log(scores[3]);
// console.log(scores[4]);

// for(let u = 1; u<=50; u++){
//     console.log('This is the value of u', u);
// }

//DOM stands for document object model is an object representation of a webpage
// window is the entire tab while document is the webpage, everything is part of the webpage

// get element by class name

// console.log('Welcome to SAIL')

// console.log(document.getElementsByClassName("text"));
// console.log(document.getElementById("hr"));
// console.log(document.getElementById("btn").innerText);
// console.log(document.querySelector("home"));

// four ways of targeting elements in class name
// document.getElementById
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll

// textContent 
// innerHTML
// innerText
// difference btw textContent, innerHTML and innerText

// create an object
// let student = {
//     name: "Martins",
//     nationality: "Ghanian",
//     status: "single",
// }
// console.log(student);
// student.name
// student.nationality
// student.status

// console.log(document.querySelectorAll('li')[2].innerText);
// document.getElementById('hr').textContent = 'i have been changed by javascript';
// document.querySelectorAll('li')[2].textContent = 'spring onions'

// Event listeners
// Event listeners is the interaction within a webpage e.g. click, hover, scroll, onclick, onmouseover etc
// document.getElementBy Id('btn).addEventListener('click', function() { console.log('Button clicked')}

// let Header = document.getElementById("header");
// Header.style.color = "brown";
// Header.style.backgroundColor = "lightblue";
// Header.style.fontSize = "30px";

// function showAlert() {
//     alert("Button clicked!")
// }

let header = document.getElementById("open");
const change = () => {header.innerHTML = "mary";}




