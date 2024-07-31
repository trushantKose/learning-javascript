// using one method after another method order of execution will be left to right;
// let msg = "   hello    ";
// let newMsg = msg.trim(); // for delete extra space
// console.log("after trim:", newMsg);
// newMsg = newMsg.toUpperCase();   // to make a str into upper case
// console.log(newMsg);

let msg = "  hello  ";
let newMsg = msg.trim().toUpperCase();   // chaining left to right of multiple methods
console.log(newMsg);