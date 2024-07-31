/*Write a program to find a largest of 3 numbers */
let num1 = 1;
let num2 = 2;
let num3 = 3;

if(num1 > num2){
    if(num1>num3){
        console.log(num1,"is greater");
    } else{
        console.log(num3,"is greater")
    }
} else {
    if(num2 > num3){
        console.log(num2, "is largest");
    } else{
        console.log(num3, "is largest");
    }
}