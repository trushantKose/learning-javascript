/*For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
find the average marks of the entire class */
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

// for of loop
for(let val of marks){
    sum = sum + val;
}
let avg = sum / marks.length;
console.log(`avg marks of the entire class is ${avg}`);
