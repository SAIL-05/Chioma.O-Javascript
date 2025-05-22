// DOM = Document obeject model ; Object representation of a webpage
// DOM is a tree structure

// document.getElementsByClassName("container")[0].style.backgroundColor = "red"; // getElementsByClassName returns a collection of elements

// // 4 ways to target element
// document.getElementsByClassName
// document.getElementById
// document.querySelector
// document.querySelectorAll

// textContent
// innerHTML
// innrText

// textContent - gets the text content of the element
// innerHTML - gets the HTML content of the element
// innerText - gets the text content of the element, but does not include hidden elements
// innerText is slower than textContent

// textContent is faster than innerText



console.log(window.document.querySelectorAll('li')[2].innerText)

document.querySelectorAll('li')[3].innerText = 'plantain'
