// Nesting if-else is writing if-else inside if-else statement. It can have many levels
let marks = 45;
if(marks >= 33){
    console.log("pass");
    if(marks >= 80){
        console.log("Grade: O");
    }else {
        console.log("Grade: A");
    }
}else{
    console.log("Better luck next time");
}