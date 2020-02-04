let colorComp = [];

function myFunction() {

const colorPool = ["red", "green", "yellow", "blue"];
let i = 0;

colorComp[colorComp.length] = colorPool[Math.floor(Math.random() * (colorPool.length))];    
console.log(colorComp);

let timer = setInterval(function() {
   if(i === colorComp.length) {
      clearInterval(timer);
   }

    let colorId = "#" + colorComp[i];   
    let colorClass = colorComp[i];

    console.log(colorClass);
    $(colorId).addClass(colorClass);

    setTimeout(function() {
        $(colorId).removeClass(colorClass);
    }, 1000);
   
    i++;
}, 1500);


let userArray = [];

    $(".color_btn").children().click(function () {
        userArray[userArray.length] = this.id;
    });

 


if(userArray === colorComp) {
    myFunction();
} else {
    alert("Game Over!");
}

}