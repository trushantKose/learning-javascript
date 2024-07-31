/*For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer. */

let items = [250, 645, 300, 900, 50];
let idx = 0;

// using for of loop
// for(let val of items){
//     // console.log(`value at index ${idx} = ${val} `);
//     let offer = val/10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer = ${items[idx]}`);
//     idx++;
// }

// using for loop
for(let i = 0; i <= items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i] - offer;
}
console.log(`value after offer = ${items[i]}`);

