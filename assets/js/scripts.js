
let colorPool = ["red", "green", "yellow", "blue"];
let i;
let colorComp= [];

function myFunction() {
newColor = colorPool[Math.floor(Math.random() * (colorPool.length))];
colorComp[colorComp.length] = newColor;


$(newColor).style.display = "block";
}
;

/* if(userInput === colorComp) {
    myFunction();
} else {
    alert("Game Over!");
    */