// Create an arrow function to perform the same task.

const countVowel = (str) => {
    let count = 0;
    for(const Char of str){
        if(Char === "a" || Char === "e"|| Char === "i"|| Char === "o" || Char === "u"){
            count ++;
        }
    }
    return count++;
};