// splice() method: change original array (add, remove, replace):- splice(startIdx, delCount, newE(1...))
// splice(startIdx, delCount, newEl) take 3 parameter

// lets create numerical array
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);


//1)- add element (strIdx, delCou, addEle)
// arr.splice(2, 0, 101);

//2)- delete element (idx, delCount)
// arr.splice(3, 1);

//3)- Replace element
arr.splice(3, 1, 101);