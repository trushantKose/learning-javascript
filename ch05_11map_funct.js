/**
Creates a new array with the result of some operation. The value its callback returns are used to form new array

arr.map(callbackFunct(value, index, array))

ex:- let newArr = arr.map((val) => {
    return val * 2;
    })
 */

let nums = [1, 2, 3, 4, 5, 6, 7];

// nums.map((val) => {
//     console.log(val)
// }); //using map to print all values

// map is used to create newArray using some return value based on each value which is stored at the individual indices of the array
let newArr = nums.map((val) => {
    return val * 2;
});
console.log(newArr);