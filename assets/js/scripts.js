
let colorComp = [],
    points = 0,
    userArray = [],
    highScores = [];

let stages = {
    "stageOne": 1000,
    "stageTwo": 800,
    "stageThree": 500
}

/**
 The function below takes a 'colour' at random from the ColorPool array
 and adds it as the last index of the colorComp array.
 */
function playGame() {
    $("#play_btn").fadeOut(1000);
    const colorPool = ["red", "green", "yellow", "blue"];
    let i = 0;

    colorComp[colorComp.length] = colorPool[Math.floor(Math.random() * 
        (colorPool.length))];  
        
/**
setInterval() iterates through the colorComp array. 
 It takes value of each index and creates 1x class and 2x id's from it, 
 storing them in separate variables. 

 One id is used to target a sound clip. The other is used to target the relevant div element in the document. 
 The class is then used to apply a set of CSS style to the div until the SetTimeout function ends and the class is removed.
 */
    let timer = setInterval(function() {
        if (i === colorComp.length) {
            $(".color_btn").children().removeClass("unclickable");
            clearInterval(timer);
        }

        let colorId = "#" + colorComp[i];
        let colorClass = colorComp[i];
        let soundId = colorId + "-beep";
        
        $(colorId).addClass(colorClass);
        $(soundId)[0].play();
        setTimeout(function() {
            $(colorId).removeClass(colorClass);
        }, 800);
        
        i++;
    }, 1000);

} //close of PlayGame function.


// USER INPUT
    let i = 0; //must be declared outside the function to allow i to increment everytime a user clicks
$(".color_btn").children().click(function() {

    let colorClass = this.id;
    let colorId = "#" + this.id;
    let soundId = colorId + "-beep";
    userArray[userArray.length] = colorClass;
    //console.log(colorId + "/." + colorClass + "/" + soundId);
    console.log(userArray + " vs " + colorComp);

    $(colorId).addClass(colorClass + " unclickable");
    $(soundId)[0].play();
    
    setTimeout(() => {
            $(colorId).removeClass(colorClass + " unclickable");
    }, 400);

    setTimeout(() => {
            compareIndex();
    }, 500);
    


    function compareIndex() {
        if(userArray[i] === colorComp[i]) {
            //console.log("The indexes match");
            if(userArray.length === colorComp.length) { // if tboth arrays match, clear the user array ready for the next round
            console.log(userArray[i] + " vs " + colorComp[i]);
                userArray = [];
                i = 0;
                console.log("Array is: " + userArray + " & i:" + i);
                points += 5; 
                document.getElementById("score").innerHTML = "points: " + points;

                setTimeout(() => {
                    $(".color_btn").children().addClass("unclickable");
                    playGame();
                }, 2000);
            }

            else {
                console.log(i);
                i++;
            }
        }
        else {
            console.log(points);
            document.getElementById("gamescore").innerHTML = points;
                $('#gameOver').modal();
                addScore(points);
                $('#gameOver').on('hide.bs.modal', function () {
                    location.reload();
                }).modal('show');
        }
            
    }

});


function sendMail(feedbackForm) {
    console.log('working');
    emailjs.send("gmail", "feedback", {
        "from_name": feedbackForm.name.value, 
        "from_email": feedbackForm.emailaddress.value, 
        "user_feedback": feedbackForm.feedback.value 
    })
   .then (
       function(response) {
           $('.form-data').val('');
           $('#feedbackModal').modal('hide');
       }
   ); return false;
}
 
 

            


function addScore(points) {
    let highScores_Str = localStorage.getItem("scores");
    if(highScores_Str === null) { 
            highScores_Str = "0,0,0,0,0";
    }

    let highScores_Arr = highScores_Str.split(',').map(function(item){
        return parseInt(item);
    });
    


    if (points < highScores_Arr[4]) {
        console.log("good try");
    } else {
        console.log(highScores_Arr);
        highScores_Arr.splice(4, 1, points);
        highScores_Arr.sort(function(a, b){return b - a});
      
        console.log(highScores_Arr);
        localStorage.setItem("scores", highScores_Arr);
        }
    }


    


        
        


     








