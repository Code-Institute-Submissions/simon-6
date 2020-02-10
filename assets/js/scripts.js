let colorComp = [];
let points = 0;

$("#play_btn").on("mouseover", function() {
    $("#play_btn").css("color", "blue");
});

function playGame() {

$("#play_btn").fadeOut(1000);

console.log(points);
const colorPool = ["red", "green", "yellow", "blue"];
let i = 0;

colorComp[colorComp.length] = colorPool[Math.floor(Math.random() * 
    (colorPool.length))];    

let timer = setInterval(function() {
   if(i === colorComp.length) {
      clearInterval(timer);
   }

    let colorId = "#" + colorComp[i];   
    let colorClass = colorComp[i];
    let soundId = colorId + "-beep";
    console.log(soundId);
    console.log(colorId);

    $(colorId).addClass(colorClass);
    $(soundId)[0].play();

    setTimeout(function() {
        $(colorId).removeClass(colorClass);
    }, 800);
   
    i++;
}, 1000);



}

let userArray = [];
let i = 0;

    $(".color_btn").children().click(function() {
        let colorClass = this.id;
        let colorId = "#" + this.id;
        let soundId = colorId + "-beep";
        userArray[userArray.length] = colorClass;
        //console.log(colorId + "/." + colorClass + "/" + soundId);
        console.log(userArray + " vs " + colorComp);

        $(colorId).addClass(colorClass);
        $(soundId)[0].play();
        
        setTimeout(function() {
                $(colorId).removeClass(colorClass);
        }, 400);

        setTimeout(function() {
                compareIndex();
        }, 500);
        

        function compareIndex() {
            if(userArray[i] === colorComp[i]) {
                console.log("The indexes match");
                if(userArray.length === colorComp.length) {
                    userArray =[];
                    i = 0;
                    console.log("Array is: " + userArray + " & i:" + i);
                    points += 5; 
                    document.getElementById("score").innerHTML = "SCORE: " + points;

                    setTimeout(() => {
                        playGame();
                    }, 2000);
                }

                else {
                    i++;
                }
            }
            else {
                 alert("GAME OVER");

            }
                
        }

    });

 
 

            

    


        
        


     








