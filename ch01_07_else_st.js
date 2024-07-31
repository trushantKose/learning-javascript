// else statement : when if condition became false then else condition execute
// else statement for voting
let age = 19;

if(age >= 18){
    console.log("you can vote and you are adult");
} else{
    console.log("you cannot vote and you are child");
}

// else statement for traffic light signals
let color = "green";

if(color == "red"){
    console.log("stop: the light is in red color")
} else if(color == "yellow"){
    console.log("go slow: the color of light is yellow");
} else if(color == "green"){
    console.log("go: the light color is green");
}
else{
    console.log("traffic light is broken");
}