console.log(5 + 6);

let colorPool = ["red", "green", "yellow", "blue"];
let newColor = colorPool[Math.floor(Math.random() * (colorPool.length))];

function myFunction() {

let colorComp= [];
let colorId = "#" + newColor;
let colorClass = "." + newColor;
let i;

colorComp[colorComp.length] = newColor;

console.log(colorComp);

}
/*let userInput =  []
if(userInput === colorComp) {
    myFunction();
} else {
    alert("Game Over!");
    */
