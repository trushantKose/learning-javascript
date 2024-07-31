// for  the give string: trim it & convert it to uppercase;
let msg = "help";
console.log(msg.trim().toUpperCase());


// for the string -> let name = "JavaScript", predict the output for following:
let name = "ApnaCollege";

let newName = name.slice(4, 9);   //Colle
console.log(newName);

console.log(name.indexOf("na"));   //2 idx

console.log(name.replace("Apna", "Our"));       //Ourcollege

// Separate the "college" part in the above string & replace 'T' with 't' in it.
let newString = name.slice(4).replace("l", "t").replace("l","t");
console.log(newString);                             //cottege