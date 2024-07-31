// for in loop :- it is used for objects and also for arrays

let student = {
    // keys: value (pairs return)
    name : "trushant kose",
    age : 22,
    cgpa : 8.5,
    isPass : true,
};

// for in loop always return key of object
for(let key in student){
    console.log("key=",key,  "value=", student[key]);
}