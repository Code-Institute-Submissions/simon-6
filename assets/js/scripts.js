let colorComp = [];

function myFunction() {

const colorPool = ["red", "green", "yellow", "blue"];
let i;

colorComp[colorComp.length] = colorPool[Math.floor(Math.random() * (colorPool.length))];    
console.log(colorComp);

for(i = 0; i < colorComp.length; i++) {

colorId = "#" + colorComp[i];   
colorClass = colorComp[i];

$(colorId).addClass(colorClass);
console.log(colorId + " " + colorClass);


}

}

/*
let userInput =  []
if(userInput === colorComp) {
    myFunction();
} else {
    alert("Game Over!");
let colorId = "#" + newColor;
let colorClass = "." + newColor;
    */