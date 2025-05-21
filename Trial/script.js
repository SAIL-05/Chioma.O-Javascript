//Write a function that takes a number and returns its square
function Square(){
    let number = prompt('Enter a number');
}

//Return the larger of two numbers
function max(a, b) {
  return a > b ? a : b;
}
//Check if a string is a palindrome

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
}

//Convert string to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}

//Intermediate Level Solutions Factorial of a number

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
//Reverse a string

function reverseString(str) {
  return str.split('').reverse().join('');
}

//Sum of array elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

//Find longest word in a string
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
