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




let userArray = [];
let count = 0;

    $(".color_btn").children().click(function() {
        userArray[userArray.length] = this.id;
        console.log(userArray + " " + count);
        compareIndex();
        

        function compareIndex() {
            if(userArray[count] === colorComp[count]) {
                console.log("The indexes match");
                if(userArray.length === colorComp.length) {
                    userArray =[];
                    count = 0;
                    console.log("Matched!");
                    playGame();
                }
                else {
                    count ++;
                }
            }
            else {
                 alert("GAME OVER");
            }
                
        }

    });
}
 
 

            

    


        
        


     








