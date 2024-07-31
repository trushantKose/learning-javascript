// for of loop:- special loop help for to iteration (loop) of some special datatype
// which is basically use for on (strings and arrays) not for objects

let str = "javascript";
let size = 0;
for(let val of str){
    // i = val
    //iterator -> characters
    console.log("val=", val);
    size++;
}
console.log("string size =", size);
/*
output
i= j
i= a
i= v
i= a
i= s
i= c
i= r
i= i
i= p
i= t
string size = 10 */