/**
 * It is a callback function
Create a new array of elements that give true for a condition/filter.

for ex:-
    let newArr = arr.filter((val) => {
        return val % 2 === 0;
    });
*/

// filter even values from array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);

// filer odd values from arrays
// let oddArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(oddArr);

// print the value greater than 3
let greaterThan = arr.filter((val) => {
    return val > 3;
});
console.log(greaterThan);