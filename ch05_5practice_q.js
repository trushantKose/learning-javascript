/**
Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.
*/
function countVowel(str){
    let count = 0;
    for(const Char of str){
        if(Char === "a" || Char === "e"|| Char === "i"|| Char === "o" || Char === "u" ){
            count++;
        }
    }
    return count;
}