// Array indices :- the values are stored in linear manner
let marks = [98, 94, 23, 53, 24];
for(let i in marks){
    console.log("i = ", marks[i]);
}

// looping over an Array:- Print all elements of an array
let heroes = ['shakti-man', 'krish', 'hulk', 'antman', 'doctor-strange', 'marvels'];

// length property
// for(let i = 0; i < heroes.length; i++){
//     console.log("Marvel Hero = ",heroes[i]);
// }

// for of
for(let hero of heroes){
    console.log(hero);
}

// print the name of cities
let cities = ['delhi', 'mumbai', 'nagpur', 'pune', 'chennai'];
for(let city of cities){
    // console.log(city);
    console.log(city.toUpperCase()); //all cities are print in upper case
}


