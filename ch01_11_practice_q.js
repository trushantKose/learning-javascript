// A "good string " is a string that starts with the letter 'a' & has a length > 3. write a program to find if a string is good or not.
let str = "apple";

if((str[0] === 'a') && (str.length > 3)){
    console.log("good string");
} else{
    console.log("not a good string");
}

// predict the output of following code:
let num = 12;

if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){
    console.log("safe");
} else{
    console.log("unsafe");
}
// safe