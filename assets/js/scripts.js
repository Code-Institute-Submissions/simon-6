let colorComp = [];

function myFunction() {

let colorPool = ["red", "green", "yellow", "blue"];
let newColor = colorPool[Math.floor(Math.random() * (colorPool.length))];    
let colorId = "#" + newColor;
let colorClass = "." + newColor;
let i;

colorComp[colorComp.length] = newColor;


 $(colorId).addClass(colorClass);
console.log(colorComp);
}

/*
let userInput =  []
if(userInput === colorComp) {
    myFunction();
} else {
    alert("Game Over!");
    */