let colorComp = [];

function playGame() {

const colorPool = ["red", "green", "yellow", "blue"];
let i = 0;

colorComp[colorComp.length] = colorPool[Math.floor(Math.random() * (colorPool.length))];    

let timer = setInterval(function() {
   if(i === colorComp.length) {
      clearInterval(timer);
   }

    let colorId = "#" + colorComp[i];   
    let colorClass = colorComp[i];

    $(colorId).addClass(colorClass);
    setTimeout(function() {
        $(colorId).removeClass(colorClass);
    }, 1000);
   
    i++;
}, 1200);

}



let i = 0;
    $(".color_btn").children().click(function () {
        let userArray = [];
        userArray[userArray.length] = this.id;
        if(userArray[i] === colorComp[i]) {
            console.log("indexes match")
            if(userArray.length == colorComp.length) {
                result();  
            } else {
                console.log(colorComp);
                console.log(userArray);
            }
            }

        else {
            console.log("keep going");
        }
        i++;

        function result() {
            for(i = 0; i < colorComp.length; i++) {
                if(colorComp[i] === userArray[i]) {
                    console.log("match");
                }
                else {
                    return false;
                }
            }
        }
    });

     








