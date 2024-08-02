// function with return value
function sum(x, y){// x, y local variable -> block of scope
    s = x + y;
    console.log("before return");
    return s;
    console.log("after return")         //never executed
}
let val = sum(3, 4);
console.log(val);

