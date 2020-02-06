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

let userArray = [];
let i = 0;

    $(".color_btn").children().click(function() {
        let colorId = "#" + this.id;
        let colorClass = this.id;
        userArray[userArray.length] = colorClass;
        console.log(colorId + "/." + colorClass + " " + userArray);

        $(colorId).addClass(colorClass);
        setTimeout(function() {
                $(colorId).removeClass(colorClass);
        }, 1000);

        setTimeout(function() {
                compareIndex();
        }, 1500);
        

        function compareIndex() {
            if(userArray[i] === colorComp[i]) {
                console.log("The indexes match");
                if(userArray.length === colorComp.length) {
                    userArray =[];
                    i = 0;
                    console.log("Array is: " + userArray + " & i:" + i);

                    playGame();
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

 
 

            

    


        
        


     








