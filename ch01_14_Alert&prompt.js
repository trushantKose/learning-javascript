// Alert:- display an alert message on the page.

// alert("something is wrong!");
// alert("this is a simple page");
// console.log("this is a simple log");

// display error message on output window with red color
console.error("this is an error");

// display warning message on output window with yellow color
console.warn("this is warning message");

// Prompt:- display a dialog box that asks user for some input
let firstName = prompt("please enter your name:");
console.log(firstName);

let lastName = prompt("enter your last name");
console.log(lastName);

let msg = "welcome" + firstName + lastName;
alert(msg);