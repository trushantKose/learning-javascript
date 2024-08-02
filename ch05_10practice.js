// For a given numbers, print the square of each value using the forEach loop

let nums = [1, 2, 3, 4, 5];

// nums.forEach((num)=>{
//     console.log(num**2);
// });


// 2nd way calback
let calSquare = (num) => {
    console.log(num**2);
};

nums.forEach(calSquare);