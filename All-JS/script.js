console.log(200);


// prompt()

// let input = prompt("enter a name");
// console.log(input);
// let drama = prompt("login here");
// alert("success");

// let name = prompt("what is your name");
// console.log(name);
// alert("this is good");
// let date = prompt("enter dateof birth");
// console.log(date);
// alert("good to go");
// const number = prompt("enter digit");
// console.log(number);
// alert("invalid");


//  Alert

const yearOfBirth = document.getElementById('age')

const input = Number(prompt('Date of birth'))

yearOfBirth.textContent = `you are ${(2025 - input)} years old`

const yrOfBirth = document.getElementById('age')
const ageAns = document.getElementById('ageAns')
const btn = document.getElementById('btn')


function smbBtn (){
    let answer = Number(yrOfBirth.value)
    console.log(answer)
    ageAns.textContent = `you are ${(2025 - answer)} years old` 
    // console.log(ageAns.textContent = `you are ${(2025 - answer)} years old` )
}

btn.addEventListener('click', smbBtn)

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



// alert("correct");
//alert("all the best");
//alert("welcome to my site");
// alert("logged in successfully");
//alert("login denied");

// Backtick

// let name = ["joy","tunde","bolu",];
// let greetings = `welcome ${name} to the community `;
// console.log(greetings);

// let name = ["kol","love","read","jingh"]
// console.log(`welcome ${name} `);


// let number= "25";
// let digit = ` ${number} `;
// console.log(digit);



// let name = prompt("what is your name")
// console.log(name)
// alert("good to good");
// const username = prompt("Enter your name");
// alert(`welcome ${username}`);
//  let name = prompt("who are you")
//  console.log(name)
//  alert("you can go");

// to check if a number is even or odd

// let shege = parseInt(prompt("Enter a number"))
// if(shege % 2 === 0){
//     alert("this is an even number");
// }else{
//     alert("This is an odd number");
// }

// to check if a number is positive or negative

// let shege = parseInt(prompt("Enter a number"))
// if(shege >= 0){
//     alert(`${shege} is a positive number`);
// }else if(shege < 0 ){
// alert(`${shege} is a negative number`);
// }else{
//     alert("Enter a number");
// }

// to input the grades of yor students

// let grade = parseInt(prompt("Enter correct score"))
// if(grade >= 75 && grade <= 100){
//     alert(`${grade} is Grade A`);
// }else if(grade >=60 && grade < 75){
//    alert(`${grade} is Grade B`);
// }else if(grade >= 50 && grade <60 ){
//     alert(`${grade} is Grade C`);
// }else if(grade >=40 && grade < 50){
//     alert(`${grade} is Grade D`);
// }else if(grade >=30 && grade < 40){
//     alert(`${grade} is Grade E`);
// }else if(grade >=0 && grade < 30){
//     alert(`${grade} is Grade F`);
// }else{
//     alert("incorrect number");
// }




// let boxOne = prompt("Enter female numbers");
// let boxTwo = prompt("Enter male numbers");
// let ans = boxOne + boxTwo;
// alert(ans);

// let valueone = prompt("enter male number");
// let valuetwo = prompt("enter female number");
// let ans = valueone + valuetwo;
// alert(ans);

// parseInt

// let rose = parseInt(prompt("Enter female numbers"));
// let kolo = parseInt(prompt("Enter male numbers"));
// let you = rose + kolo;
// alert(you);

// let valueOne = parseInt(prompt("enter female number"));
// let valueTwo = parseInt(prompt("enter male number"));
// let valueThree = valueOne + valueTwo;
// alert(valueThree);

//Exercise list
// 1. write a program that checks if the number is positive or negative

// let number = 0;
// if (number >=0) {
// console.log ("this is a positive number")}
// else{
// console.log("this is a negative number")
// }


// let number = 7;
// if(number >= 0){
//     console.log("this is a positive number");
// } else{
//     console.log("this is a negative number");
// }


//  2.write a program that checks if the number is even or odd
// let num = parseInt(prompt("Enter a number"))
// if (num % 2 === 0){
//  alert(`${num} is an even number`)
// }
// else{
//     alert(`${num} is an odd number`)
// }


// let num = parseInt(prompt("Enter a number"))
// if(num >= 0){
//     alert(`${num} is a positive number`);
//  } else if(isNaN(num)){
//     alert("enter a number");
//  }
//  else{
//     alert(`${num} is a negative number`);
// }






// if else if conditional statement


//  const userNumber = parseInt(prompt("Enter a number")); // prompts the user to enter a number

// if(userNumber > 0) {
//     alert(`${userNumber} is a positive number`);
// }else if (userNumber === 0) {
//     alert(`${userNumber} is invalid`);
// }
// else if(isNaN(userNumber)) {
//     alert("enter a number");
// }else if (userNumber.toString() === "NaN") {
//   alert(`This is not a number`);
// }
// else {
//     alert(`${userNumber} is a negative number`);
// }

//  let number = parseInt(prompt("Enter a number"))
//  if(number > 0){
//     alert(`${number}is a positive number`);
//  }else if(number === 0){
//     alert(`${number} is invalid`);
//  }else if(isNaN(number)){
//     alert("enter a number");
//  }else{
//     alert(`${number} is a negative number`);
//  }

// write a program that determines the greatest of two numbers.
// let firstNumber = parseInt(prompt("Enter first number"))
// let secondNumber = parseInt(prompt("Enter second number"))

// if(firstNumber > secondNumber){
//     alert("firstNumber is greater");
// }else if(secondNumber > firstNumber){
//     alert("secondNumber is the greatest");
// }else{
//     alert("invalid");
// }



// write a program that transforms a numerical grade to a letter grade 
// (e.g grade 0-39 should display "F", 40-44 should display "E", 45-49 should display "D", 
// 50-59 should display "C", 60-69 should display "B", 70-100 should display "A").

// let score = parseInt(prompt("Enter your score"))
// if(score >=0 && score <= 39){
//     alert(`${score} is Grade F`);
// }else if(score >=40 && score <= 44){
//     alert(`${score} is Grade E`);
// }else if(score >=45 && score <= 49){
//     alert(`${score} is Grade D`);
// }else if(score >= 50 && score <= 59){
//     alert(`${score} is Grade C`);
// }else if(score >= 60 && score <= 69){
//     alert(`${score} is Grade B`);
// }else if(score >= 70 && score <= 100){
//     alert(`${score} is Grade A`);
// }else{
//     alert("invalid");
// }


// ASSIGNMENTS
//  write a program that calculates the body max index (BMI) and categorizes it. The formular for BMI is:
//  weight / (height * height) where weight is in kg and height is in meters. The categories are as follows:
//  underweight (BMI < 18.5), normal weight (BMI 18.5 - 24.9), overweight (BMI 25 - 29.9), and obesity (BMI >= 30).
// const weight = parseFloat(prompt("enter weight here "));
// const height = parseFloat(prompt("enter height here "));
// let bmi = (weight / (height * height));
// if(bmi < 18.5){
//     alert(`you are ${bmi} and underweight `);
// } else if(bmi >= 18.5 && bmi < 24.9){
//     alert(`you are ${bmi} a normal weight`);
// } else if(bmi > 25 && bmi < 29.9){
//     alert(`you are ${bmi} and over weight`);
// }else if(bmi >= 30){
//     alert(`you are ${bmi} and obessed`);
// }
// else{
//     alert("invalid");
// }



// let number = parseInt(prompt("Enter a number"))
// if(number >= 0){
//     alert(`${number} is a positive number`);
// } else if(number < 0){
//     alert(`${number} is a negative number`);
// }else if(number >= 0 +" "+ (isNaN(number))){
//     alert(`${number} is an invalid pair`);
// }
// else{
//     alert("invalid");
// }

//write a program that calculates the ticket price based on the 
// age with the following conditions: age below 12 pay a 
// ticket price of 5,agebelow 18 pay a ticket price of 10, age 
//below 60 pay a ticket price of 20,age over 60,pay a ticket price
// of 15.

// let age = parseInt(prompt("Enter Age"))
// if(age > 0 && age <= 12){
//     alert("pay a ticket price of $5");
// } else if(age > 12 && age <= 18){
//     alert("Pay a ticket price of $10");
// } else if(age > 18 && age <= 60){
//     alert("Pay a ticket price of &20");
// }else if(age >= 60 && age <= 120){
//     alert("Pay a ticket price of $15");
// }    
// else{
//     alert("invalid");
// }


//write a program that determines if a year is a leap year

//write a program that calculates a discount based on the 
// purchase amount. price equals or over 100 discount have a
//discount of 20, price equals or over 50 have a discount 
// of 10, otherwise discount 0

//write a program that greets the user based on the time of 
// the day. display good morning, good afternoon or 
// good evening based on the time of the day when yourun 
// the code.

// let time =parseInt(prompt("Enter time in 24hrs format"))
// if(time > 0 && time < 12){
//     alert("Good morning amigo");
// }else if(time >= 12 && time < 16){
//     alert("Good afternoon amigo");
// }else if(time >= 16 && time <= 23.59){
//     alert("Good evening amigo");
// }else if(isNaN(time)){
//     alert("incorrect time");
// }else{
//     alert("Enter time");
// }



//write a simple number guessing game. provide a secret 
// number and a guess. based on those numbers, give players
// clue if their guess is higher, lower or correct.



// math.random
// const secretNumber = Math.floor(Math.random() * 8) + 1; // random number between 1 and 10
// const guess = Number(prompt("Guess the secret number between 1 and 10:"));
// console.log(secretNumber);

// if (guess === secretNumber) {
//   alert("Correct! You guessed the secret number.");
// } else if (guess < secretNumber) {
//   alert("Too low! Try a higher number.");
// } else if (guess > secretNumber) {
//   alert("Too high! Try a lower number.");
// } else {
//   alert("Invalid input! Please enter a number.");
// }



// Mapping Numbers

// const prices = [100, 200, 300, 600,777];
// const discounted = prices.map(price => price * 0.9);

// console.log(discounted); // [90, 180, 270]




//  Mapping Strings

// const names = ["Teewhy", "Divine", "Mary"];
// const greetings = names.map(name => Hello, ${name}!);
// console.log(greetings);
//["Hello, Teewhy!", "Hello, Divine!", "Hello, Mary!"]



// Mapping Objects
// const users = [
//   { name: "Teewhy", age: 25 },
//   { name: "Divine", age: 30 }
// ];

// const userAges = users.map(user => ${user.name} is ${user.age} years old);

// console.log(userAges);
// ["Teewhy is 25 years old", "Divine is 30 years old"]




// string methods .... a must know

// let myStr = "Hello javascript World";
// console.log(myStr);
// console.log(myStr.toLowerCase());
// console.log(myStr.toUpperCase());
// console.log(myStr.charAt());
// console.log(myStr.indexOf("World"));
// console.log(myStr.includes("Hello"));
// console.log(myStr.slice(2,5));
// console.log(myStr.trim());
// console.log(myStr.replace("World", "idiot"));
// console.log(myStr.split());
// console.log(myStr.split(" ")[2]);
// console.log(myStr.startsWith("Hello"));
// console.log(myStr.endsWith("hi"));

// console.log(myStr.trim()); // takes off un-neccessary spaces in sentences
// console.log(myStr.replace("World", "Universe")); // replace world and input universe


// NUMBER METHODS

// let num = 42.769;
// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed());




// Math Method

// console.log(Math.PI);
// console.log(Math.round(41.945));
// console.log(Math.floor(42.342));
// console.log(Math.ceil(42.2));
// console.log(Math.max(12,4,3,7));
// console.log(Math.min(12,4,6,8));
// console.log(Math.pow(23,70));
// console.log(Math.sqrt(144));
// console.log(Math.random()*100);
// console.log(Math.floor(Math.random()*100));


//   Math.PI is the ratio of the circumfrence of a circle to it's parameter

// function number() {
//     console.log(Math.PI); 
// }number()


// Math.round returns a supplied numeric expression rounded to the nearest
//  integer

// function round() {
//     let cal =3.9;
//     console.log(Math.round(cal));  // ans = 4
// }round()


// Math.floor returns the greatest integer less than or equal to numeric 
//arguement

// function floor() {
//     let cal = 2.9;
//     console.log(Math.floor(cal));  // ans = 2
// }floor()



// Math.ceil returns the smallest integer greater than or equal to it's 
// arguement

// function ceil() {
//     let cal = 16.2;
//     console.log(Math.ceil(cal));   // ans = 17
// }ceil()


// Math.sqrt returns the square root of a number

// function sqrt() {
//     let cal = 234;
//     console.log(Math.sqrt(cal)); //ans = 15.2970
// }sqrt()



// Math.random returns a psuedorandom number between 0 and 1
// function random() {
//     let cal = parseInt(prompt('enter a number'));
//     console.log(Math.random()*20);
// }random()


// function floor() {
//     let cal = parseInt(prompt('enter a number'));
//     console.log(Math.floor(Math.random()*20));
// }floor()





// OBJECTS

// let student = {
//     name: "shade",
//     age: 34,
//     mail: "shade@gmail.com"
// };
//  console.log(student);
//  console.log(student.name);
//  console.log(Object.keys(student));
//  console.log(Object.values(student));

// FUNCTIONS

// function myName(name) {
//     console.log(name);  
// }
// myName("damola");
// myName("idiot");
// myName("money");

// function addNum(a, b) {
//     console.log(a+b);
    
// }
// addNum(30,8);

// function numbers() {
//     let num1 = prompt("Enter a number");
//     let num2 = prompt("Enter a number");
//     let num3 = prompt("Enter a number");
//     let num4 = prompt("Enter a number");
//     console.log(Math.max(num1,num2,num3,num4),"is the highest number");
// }
// numbers()

// function miniLength() {
//     let num1 = prompt("Enter a number");
//     let num2 = prompt("Enter a number");
//     let num3 = prompt("enter a number");
//     let num4 = prompt("Enter a number");
//     console.log(Math.min(num1,num2,num3,num4),"is the smallest number");
// }
// miniLength()

// function evenNumbers() {
//     let solution = prompt("Enter number")
//     if (solution % 2=== 0) {
//         console.log(`${solution} is an even number`);
//     }else{
//         console.log(`${solution} is an odd number`);
//     }
// }
// evenNumbers()

// function name() {
//     let grade = parseInt(prompt("Enter score"));
//     if (grade >= 90 && grade <= 100) {
//         console.log(`${grade} is A grade`)
//     }else if (grade >= 75 && grade < 90) {
//         console.log(`${grade} is B grade`);
//     }else if (grade >= 60 && grade < 75) {
//         console.log(`${grade} is C grade`);
//     }else if (grade >= 50 && grade < 60) {
//         console.log(`${grade} is D grade`);
//     }else if (grade >= 35 && grade < 50) {
//         console.log(`${grade} is E grade`);
//     }else if (grade >= 0 && grade < 35) {
//         console.log(`${grade} is F grade`);
//     }else{
//         console.log(`${grade} is invalid`);
//     }
// }
// name()

// function greaterNumber() {
//     let firstNumber = parseInt(prompt("Enter a number"));
//     let secondNumber = parseInt(prompt("Enter a number"));
//     if (firstNumber > secondNumber ) {
//         console.log(`${firstNumber}`, "firstNumber is greater");
//     }else if (secondNumber > firstNumber) {
//         console.log(`${secondNumber}`, "secondNumber is greater");
//     }else{
//         console.log("invalid");
//     }
// }
// greaterNumber()

// TO CHECK THE LENGTH OF A THING E.G NAME

// function numberLength() {
//     let name = prompt("Enter a Name")
//     console.log(name.length);
// }
// numberLength()



// LOOP



// for (let number = 0; number < 11; number++) {
//     console.log(number);
//    console.log('this is the value of number',number);
//   console.log('number =',number);   
// }


// for (let checkNumber = 0; checkNumber < 11; checkNumber++) {
//     if (checkNumber % 2 === 0) {
//         console.log(`${checkNumber} is an even number`);
//     }else {
//         console.log(`${checkNumber} is an odd number`);
//     }
// }


// let lengthOfNumber = [2,3,4,5,6,];
// let num = 1;
// for (let number = 5; number < 20; number++) {
//     console.log(lengthOfNumber[num]);
//     // console.log(num);
// }

// function name() {
//     for (let number = 0; number < 11; number++) {
//         console.log('number =',number); 
//     }
// }name()

// function greaterNumber() {
//     let firstNumber = parseInt(prompt("enter a number"));
//     let secondNumber = parseInt(prompt("enter a number"));
//     if (firstNumber > secondNumber) {
//         alert(`${firstNumber} firstNumber is the greatest`);
//     }else if (secondNumber > firstNumber) {
//         alert(`${secondNumber} secondNumber is the greatest`);
//     }else if (firstNumber === secondNumber) {
//         alert("both numbers are equal");
//     }else{
//         alert("invalid");


//     }
// }greaterNumber()

// function greaterNumber() {
//     for (let number = 0; number < 11; number++) {
//         let firstNumber = parseInt(prompt("enter first number"));
//         let secondNumber = parseInt(prompt("enter second number"));
//         if (firstNumber > secondNumber) {
//             alert(`${firstNumber} firstNumber is the greatest`);
//         }else if (secondNumber > firstNumber) {
//             alert(`${secondNumber} secondNumber is the greatest`);
//         }else if (firstNumber == secondNumber) {
//             alert('both numbers are equal');
//         }else{
//             alert('invalid');
//         } 
//     }
// }greaterNumber()

// function highestNumber(num1,num2,num3,num4) {
//     num1 = 11;
//     num2 = 2;
//     num3 = 3;
//     num4 = 4;
//     console.log(Math.max(num1,num2,num3,num4),'is the highest number');
// }highestNumber()

// function highestNumber(num1,num2,num3,num4) {
//     num1 = parseInt(prompt('enter a number'));
//     num2 = parseInt(prompt('enter a number'));
//     num3 = parseInt(prompt('enter a number'));
//     num4 = parseInt(prompt('enter a number'));
//     console.log(Math.max(num1,num2,num3,num4),'is the highest number');  
// }highestNumber()

// function lowestNumber(num1,nu2,num3,num4) {
//     num1 = parseInt(prompt("enter a number"));
//     num2 = parseInt(prompt("enter a number"));
//     num3 = parseInt(prompt("enter a number"));
//     num4 = parseInt(prompt("enter a number"));
//     console.log(Math.min(num1,num2,num3,num4),'is the lowestNumber ');  
// }lowestNumber()

// function lowestNumber(num1,num2,num3,num4) {
//     num1 = 1;
//     num2 = 11;
//     num3 = 245;
//     num4 = 23;
//     console.log(Math.min(num1,num2,num3,num4),'is the lowest number');
// }lowestNumber()

// for (let number = 0; number < 11; number++) {
//     if (number % 2 === 0) {
//         console.log(`${number} even`);
//     }else{
//         console.log(`${number} odd`); 
//     }
// }

// function backWards() {
//     let name = prompt('enter a nume')
//     console.log(name.split('').reverse('').join(''));
    
// }backWards()

// function getId() {
//     console.log(document.getElementsByClassName('plan'));
    
// }getId()


// DOCUMENT.GETELEMENTBYCLASSNAME ... very neccessary to know.. very important

// function getClass() {
    
    
// }getClass()


// console.log(document.getElementById('moon'));
// console.log(document.getElementById('para'));
// console.log(document.getElementById('btn'));
// console.log(document.getElementsByClassName('list')[1].innerHTML='tolu');
// console.log(document.getElementsByClassName('plan')[2].innerHTML='kolo');
// console.log(document.getElementsByClassName('plan')[3].innerText='black');

// function addnewtext() {
//     let a = document.getElementById('input-box');
//    let b = document.createElement('li');
//    b.textContent=a.value;
//    document.getElementById('myList').appendChild(b);
// }


function myTodo() {   
let a = document.getElementById('input-box'); 
let b = document.createElement('li');
b.textContent = a.value;
document.getElementById('mylist').appendChild(b);
}

// function degree (){
//     let Celsius = parseInt(prompt('enter number'))
//     let result = (Celsius * 9/5)+32

//     alert(result)
// }
// degree()


// dom means document object model used to alter the html and css  it controlls html and css from js includes ;
// document.getElementsByClassName
// document.getElementById
// document.querySelector
// document.querySelectorAll


// textContent
// innerHTML
// innerText
// are used to get the content of a class or id

// document.getElementById('kid').textContent = 'updated'


// console.log(document.querySelectorAll('li'))
// document.querySelectorAll('li')[3].textContent = 'sugaerhughaeruivnh'

// document.querySelectorAll('li')[4].textContent = 'yellow garri'

// Event LISTENERS 
//  they are used to carry out action based on an event you want to use eg onclick
// you can use thme in your html or your js



//  for loop  ( 1. initilaizer 2. condition 3. increment or decrement+)

// for (let i = 0 ; i <= 10; i += 3) {
//     console.log(i)
// }

// for(let i = 1; i < 50 ;i++) {
//           if(i % 2 === 0) {
//               console.log(i, ' is an even number')
//           } else {
//               console.log(i, ' is an odd number')
        
//         }
//     }

// document.querySelectorAll('h1')[3] .innerText ='i have been changed'

 
// function btn (){
//   let contain =  document.querySelector('h1')

//     if(contain.textContent === "open"){
//             }
// }

    //    asynchronous javascript 

    // setTimeout(() => {
        
    // }, timeout);  is used to set time a block of code will show 

    callback is used To


// Asynchronouu JS
// Javascript excutes in a serial order
// while some code taakes a longer times asynchronous help you to
// to execute many codes
// by default JS is synchronous
// but we can make it asynchronous

console.log(" first task");
console.log(" second task");
console.log(" third task");
console.log(" fourth task");
console.log(" continue task");


// setTimeout is an asynchronous function
setTimeout(() => {
    console.log("this is a callback function");
}, 2000); // 2000 milliseconds = 2 seconds

// a callback function is a function that is passed as an
//  argument to another function

const caller = (callback) => {
    console.log("caller function");
    callback();
}

// The Fetch API 
// Types of requests
// get, post, put, delete
// get request is used to fetch data from a server
// post request is used to send data to a server
// put request is used to update data on a server
// delete request is used to delete data from a server
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}

// .then(() => {
//     console.log("Data fetched successfully");
// })      
// .catch((error) => {
//     console.error("Error fetching data:", error);
// });    

// console.log(document.getElementById('input-box'))

function AddNewTask() {
    let inputBox = document.getElementById('input-box');
    let newlyCreatedElement = document.createElement('li');


    newlyCreatedElement.textContent = inputBox.value;
    document.getElementById('tasklist').appendChild(newlyCreatedElement);


}

// function SendNewMessage() {
//     let userInput = document.getElementById('text-message')
//     let newChat = document.createElement('p');

//     newChat.textContent = userInput.value;
//     document.getElementById('chat-app').appendChild(newChat)
// }




//DOM 
//getElementsWithClass
//getElementWithId
//querySelector
//querySelectAll

//Asynchronoush javascript
//console.log("https://jsonplaceholder.typicode.com/users")
//fetch("https://jsonplaceholder.typicode.com/users").then(hay => hay.json()).then(data => console.log(data))

//try catch statement
//try catch finally

try{
  fetch(url);
}
catch (err){
  console.log(err);
}
finally{

}

async function getAllPost() {
  let blogBlogData = await fetch("https://jsonplaceholder.typicode.com/posts");
  let realBlogData = await blogPosts.json();
  console.log(realBlogData)

const yearOfBirth = document.getElementById('age')

const input = Number(prompt('Date of birth'))

yearOfBirth.textContent = `you are ${(2025 - input)} years old`

const yrOfBirth = document.getElementById('age')
const ageAns = document.getElementById('ageAns')
const btn = document.getElementById('btn')


function smbBtn (){
    let answer = Number(yrOfBirth.value)
    console.log(answer)
    ageAns.textContent = `you are ${(2025 - answer)} years old` 
    // console.log(ageAns.textContent = `you are ${(2025 - answer)} years old` )
}

btn.addEventListener('click', smbBtn)

console.log('Welcome to SAIL')

console.log(document.getElementsByClassName('text'))
console.log(document.getElementsByClassName('text')[0].innerText)

document.getElementById('header').textContent = 'I have been changed by Javascript'

// [{},{},{},{}]
console.log(window.document.querySelectorAll('li')[2].innerText)

console.log(document.getElementById('header'))
console.log(document.getElementById('header'))

// console.log(document.querySelector('.header'))
// console.log(document.querySelector('#header'))
console.log(document.querySelector('p'))

console.log(document.querySelectorAll('p'))

let student = {
    name: 'Ronaldo',
    nationality: 'Portuguese',
    status: 'second greatest of all time',

    innerText: '',
    innectHTML: '',
    textContent: ''
}

// student.name

// textContent
// innerHTML
// innerText

// {
//     name: 'ife',
//     gender: 'male'
// }

// ['name']
// .name

// document.getElementById
// document.querySelector
// document.querySelectorAll

// let header =document.getElementById('header')

// header.style.color = "hotpink"

// header.style.backgroundColor = "orange"

// header.style.fontSize = "100px"

// const showAlert = ()=>{
//     let sum  = 2+2 
//     alert( `my sum is ${sum}`)
// }


// ill practice event listeners todaty



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


console.log("Hello, World!");
console.log("This is a test script.");


// let x = 5;
// let y = 10;


// let myAge = 25;
// let myName = "John Doe";


// //Strings
// //e.g of where to use single and double quotes
// let myString = "Hello, I'm John Doe"; //String concatenation
// let myString2 = 'Hello, I\'m John Doe'; //String concatenation with escape character


// let kate = "today is Kate's birthday"; //String concatenation
// let kate2 = 'today is Kate\'s birthday'; //String concatenation with escape character


// //Boolean is a data type that can only be true or false, 0 or 1, yes or no, on or off
// let isTrue = true;


// //underfined is a data type that has no value, it is not defined yet
// let myVar; //undefined
// // you created a variable but you don't assign it a value yet, so it is undefined


// //null is a data type that has no value, it is defined as null
// let myVar2 = null; //null


// //non-primitive data types
// //Objects are a data type that can hold multiple values in a single variable
// // it makes use of key and value pairs
// // e.g. of an object
// let myObject = {
//   name: "John Doe",
//   age: 25,
//   isStudent: false,
//   hobbies: ["reading", "gaming", "coding"],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY",
//     zip: "10001"
//   }
// };
// //Arrays are a data type that can hold multiple values in a single variable
// // it makes use of index numbers to access the values
// // e.g. of an array




// //Operators;//Assignment operators: =, +=, -=, *=, /=, %=, **=
// let myArray = [1, 2, 3, 4, 5]; //Array of numbers




// //Arithmetic operators: +, -, *, /, % (modulus), ** (exponentiation), ++ (increment), -- (decrement)
// let Y = 5;
// let K = 10;
// //Addition
// const sum = a + b;
// console.log("Sum: " + sum); //Output: Sum: 15


// //comparison operators: is used to compare 2 value and it returns a boolean answer. here is the symbol ==, ===, !=, !==, >, <, >=, <=


// //conditional statements: if, else if, else, switch
// //e.g. of an if statement
// let a = 5;
// let b = 10;
// if (a < b) {
//   console.log("a is less than b");
// }
// if (a > b) {
//   console.log("a is greater than b");
// }




// const userNumber = parseInt(prompt("Enter a number: "));


// if (userNumber > 0) {
//   alert('${userNumber} is a positive number');
// } else if (userNumber === 0) {
//     alert('${userNumber} is invalid');
//   } else {
//   }
//   alert('this is not a number');
//  else {
//       alert('${userNumber} is a negative number');
//     }
 


    // write a program that checks if a number is even or odd
    // const Mynuber = parseInt(prompt("Enter a number: "));


  let grade = parseInt(prompt("Enter your grade: "));
    if (grade >= 0 && grade <= 39) {
      alert("F");
    } else if (grade >= 40 && grade <= 49) {
      alert("D");
    } else if (grade >= 50 && grade <= 59) {
      alert("C");
    } else if (grade >= 60 && grade <= 69) {
      alert("B");
    } else if (grade >= 70 && grade <= 100) {
      alert("A");
    } else {
      alert("Invalid grade");
    }


    // if (grade <= 39) {
    //   alert("F");
    // } else if (grade <= 40) {
    //   alert("D");
    // } else if (grade <= 50) {
    //   alert("C");
    // } else if (grade <= 60) {
    //   alert("B");
    // }


    // write a program that calculates the body mass index (BMI) of a person and catergorises it as underweight, normal weight, overweight, or obese.

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

(async function fetchAllMovies() {
  try {
    let url =
      "https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c";

    let allMovies = await fetch(url);
    let movies = await allMovies.json();
    console.log(movies);

    let movieResults = movies.results;
    console.log(movieResults);

    console.log(movieResults[0]);

    let movieContainer = document.getElementById("movie-list");

    // DISPLAY SINGLE MOVIE

    // let newDiv = document.createElement("div");
    // let newImg = document.createElement("img");
    // newImg.src = `https://image.tmdb.org/t/p/w185${movieResults[3].poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c`;
    // newImg.alt = movieResults[3].title;

    // let newText = document.createElement("h3");

    // newText.textContent = movieResults[3].title;

    // newDiv.appendChild(newImg);
    // newDiv.appendChild(newText);

    // movieContainer.appendChild(newDiv);

    // DISPLAY ALL MOVIES

    for (let i = 0; i < movieResults.length; i++) {
      let newDiv = document.createElement("div");
      let newImg = document.createElement("img");
      newImg.src = `https://image.tmdb.org/t/p/w185${movieResults[i].poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c`;
      newImg.alt = movieResults[i].title;

      let newText = document.createElement("h3");

      newText.textContent = movieResults[i].title;

      newDiv.appendChild(newImg);
      newDiv.appendChild(newText);

      movieContainer.appendChild(newDiv);
    }
  } catch (err) {
    console.log(err);
  }
})();

// immediately invoked functions IIFE



    
let myname: string = 'chioma';
let score: number = 100;

//Two ways of assinging Typescritp
//1. inference;     let TypeScript infer the type of a variable based on its value
//2. anottation ; you specify the type of a variable

// union e.g let score: number | string = 100;

// Create a function that calculates interest rate and returns 
// 3 parameters

// function calculateInterestRate(principal: number, rate: number, time: number): number {
//     return (principal * rate * time) / 100;
// }

// function substractTwoNumbers(): string {
//     let num1: number = 10;
//     let num2: number = 5;
//     let result: number = num1 - num2;
//     return `The result is ${result}`;
// }

// function getUserName() {
//     let username: any = prompt('Enter your name');
// }

// // create a function that takes 4 parameters(abcd) and the function should always 
// // return a number 
// function getHighestNumber(a: number, b: number, c: number, d: number): number {
//     return Math.max(a, b, c, d);
// }

// // Typescript worrks with objects 
// let studentData: { name: string, grade: string, score: number, pass: boolean } = {
   
//     name:  "chioma",
//     grade: 'A+',  
//     score: 100,
//     pass: true,
// };
    


