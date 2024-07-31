let msg = "hello";
// start idx, ending idx
console.log(msg.slice(0, 4));           //hell 0 to 3

let str = "hello";
// when -ve idx
console.log(str.slice(-1));             //5-1 =4  -- o

let course = "JavaScript";
console.log(course.slice(1, 5));        //avaS 1 to 4

let batch = "sigma 2.0";
// start idx only
console.log(batch.slice(0));            //sigma 2.0    -> all str print when you pass the str.slice(starting idx0)

