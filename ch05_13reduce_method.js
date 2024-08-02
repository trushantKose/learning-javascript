/**
Performs some operations & reduces the array to a single value. it 
returns that single value.

for ex-
    const array1 = [1, 2, 3, 4];
    //0 + 1 + 2 + 3 + 4
    const initialVal = 0;
    const sumWithInitial = array1.reduce{
    (accumulator, currentValue => accumulator + currentValue, initialValue,
    )};
    console.log(sumWithInitial);
    // expected output: 10
*/

const array1 = [1, 2, 3, 4];

let newResult = array1.reduce((res, curr) => {
    return res + curr;
});
console.log(newResult);