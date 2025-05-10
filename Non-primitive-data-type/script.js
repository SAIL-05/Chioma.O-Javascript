// JavaScript Non-Primitive Data Types Example

// Object
let person = {
    name: "Bob",
    age: 30,
    isEmployed: true
  };
  console.log("Person Object:", person);
  console.log("Person's Name:", person.name); // Accessing a property
  
  // Array
  let fruits = ["Apple", "Banana", "Cherry"];
  console.log("Fruits Array:", fruits);
  console.log("First Fruit:", fruits[0]); // Accessing an element

  // Here, you're accessing a specific item in the array.
//   fruits[0] means:
//   “Get the item at position 0 in the array.”
//   ➡️ In JavaScript, arrays are zero-indexed, meaning counting starts at 0, not 1.
//   So:
//   fruits[0] = "Apple"
//   fruits[1] = "Banana"
//   fruits[2] = "Cherry"


  // Function (also a non-primitive type)
  function greet() {
    return "Hello!";
  }
  console.log("Function Output:", greet());
  
  // Date (built-in object)
  let today = new Date();
  console.log("Today's Date:", today);