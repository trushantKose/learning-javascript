// Logical Operator to combine expression
// 1- logical AND (&&) : if both statement is true then result is true otherwise false
let marks = 90;

if(marks >= 33 && marks >= 90){
    console.log("pass");
    console.log("A+");
}


// 2- condition for logical OR (||): if any one condition is true then result is become to true. when both condition false the result become to false
let mark = 75;
if(mark >= 33 || mark >= 80){
    console.log("pass");
    console.log("A+");
}

// logical NOT(!): the logical not convert true condition into false and false into true
if(!(mark < 33)){
    console.log("pass");
    console.log("A+");
}

if((mark > 33 && mark <= 80) || !false){
    console.log("pass"); //true
}
