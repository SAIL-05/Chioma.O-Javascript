// Practices
//Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// Program: Ticket Price Calculator based on Age
function calculateTicketPrice(age) {
    let ticketPrice;
  
    if (age < 12) {
      ticketPrice = 5;
    } else if (age < 18) {
      ticketPrice = 10;
    } else if (age < 60) {
      ticketPrice = 20;
    } else {
      ticketPrice = 15;
    }
  
    return ticketPrice;
  }
  
  // Example Usage:
  let age1 = 10;
  let price1 = calculateTicketPrice(age1);
  console.log(`For age ${age1}, the ticket price is $${price1}`);
  
  let age2 = 15;
  let price2 = calculateTicketPrice(age2);
  console.log(`For age ${age2}, the ticket price is $${price2}`);
  
  let age3 = 35;
  let price3 = calculateTicketPrice(age3);
  console.log(`For age ${age3}, the ticket price is $${price3}`);
  
  let age4 = 70;
  let price4 = calculateTicketPrice(age4);
  console.log(`For age ${age4}, the ticket price is $${price4}`);


// Write a program that determines if a year is a leap year.
// Program 1: Leap Year Checker
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   let year = 2024;
//   if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }
  
//   year = 1900;
//   if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }
  
//   year = 2000;
//   if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }
  
//   year = 2023;
//   if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }


// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
// Program 2: Discount Calculator

// function calculateDiscount(purchaseAmount) {
//     let discount = 0;
//     if (purchaseAmount >= 100) {
//       discount = 0.20; // 20% discount
//     } else if (purchaseAmount >= 50) {
//       discount = 0.10; // 10% discount
//     }
//     return discount;
//   }
  
//   // Example usage:
//   let price1 = 120;
//   let discount1 = calculateDiscount(price1);
//   console.log(`For a purchase amount of $${price1}, the discount is ${discount1 * 100}%`);
  
//   let price2 = 75;
//   let discount2 = calculateDiscount(price2);
//   console.log(`For a purchase amount of $${price2}, the discount is ${discount2 * 100}%`);
  
//   let price3 = 30;
//   let discount3 = calculateDiscount(price3);
//   console.log(`For a purchase amount of $${price3}, the discount is ${discount3 * 100}%`);


// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.
// Program 3: Time-Based Greeter
// function greetUser() {
//     const now = new Date();
//     const currentHour = now.getHours();
  
//     let greeting;
//     if (currentHour >= 5 && currentHour < 12) {
//       greeting = "Good morning!";
//     } else if (currentHour >= 12 && currentHour < 18) {
//       greeting = "Good afternoon!";
//     } else {
//       greeting = "Good evening!";
//     }
  
//     console.log(greeting);
//   }
  
//   // Run the greeting
//   greetUser();


// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.
// Program 4: Simple Number Guessing Game
// function numberGuessingGame() {
//     const secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a secret number between 1 and 100
//     const guess = parseInt(prompt("Guess the secret number (between 1 and 100):"));
  
//     if (isNaN(guess)) {
//       console.log("Invalid input. Please enter a number.");
//     } else if (guess === secretNumber) {
//       console.log("Congratulations! You guessed the correct number.");
//     } else if (guess < secretNumber) {
//       console.log("Your guess is lower than the secret number.");
//     } else {
//       console.log("Your guess is higher than the secret number.");
//     }
//   }
  
//   // Start the game
//   numberGuessingGame();