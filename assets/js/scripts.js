
let colorComp = [],
    points = 0,
    userArray = [],
    highScores_Str,
    highScores_Arr;

let stages = {
    stageOne: 1000,
    stageTwo: 800,
    stageThree: 500
}



/**
 playgame() takes a 'colour' at random from the ColorPool array
 and adds it as the last index of the colorComp array.
 */
function playGame() {
    $("#play_btn").fadeOut(1000);
    const colorPool = ["red", "green", "yellow", "blue"];
    let i = 0;

    colorComp[colorComp.length] = colorPool[Math.floor(Math.random() *
        (colorPool.length))];

    /**
    setInterval() iterates through the colorComp array. 
     It takes value of each index and creates a class and 2 id's, 
     storing them in separate variables. 
    
     One id is used to target a sound clip. The other is used to target the relevant div element in the document. 
     The class is then used to apply a set of CSS styles to the div until the SetTimeout function ends and the class is removed.
     */
    let timer = setInterval(function () {
        if (i === colorComp.length) {
            $(".color_btn").children().removeClass("unclickable");
            clearInterval(timer);
        }

        let colorId = "#" + colorComp[i];
        let colorClass = colorComp[i];
        let soundId = colorId + "-beep";

        $(colorId).addClass(colorClass);
        $(soundId)[0].play();
        setTimeout(function () {
            $(colorId).removeClass(colorClass);
        }, 800);

        i++;
    }, 1000);

} //close of PlayGame function.


// ********************** USER INPUT **********************

//i must be declared outside the function so that i can increment everytime a user clicks to add to the array

let i = 0;
$(".color_btn").children().click(function () {
    let colorClass = this.id;
    let colorId = "#" + this.id;
    let soundId = colorId + "-beep";
    userArray[userArray.length] = colorClass;
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


    /**
    compareIndex() is called every time a colour is clicked on. It checks each index in the array so far against the corresponding index in the colorComp array to see if the values match.
    Must br 
     */
    function compareIndex() {
        if (userArray[i] === colorComp[i]) {
            if (userArray.length === colorComp.length) {
                // if the arrays have matching values and length, clear the user array ready for the next round    
                console.log(userArray[i] + " vs " + colorComp[i]);
                userArray = [];
                i = 0;
                ///console.log("Array is: " + userArray + " & i:" + i);
                points += 5;
                $("#score").html("points: " + points);

                setTimeout(() => {
                    $(".color_btn").children().addClass("unclickable");
                    playGame();
                }, 1000);
            }

            //if the values match but the arrays are not the same length, allow the user to add another colour.
            else {
                i++;
            }
        }

        //if the values don't match, game over.
        else {
            console.log(points);
            $("#gamescore").html(points);
            $('#gameOver').modal();
            addScore(points);
            $('#gameOver').on('hide.bs.modal', function () {
                location.reload();
            }).modal('show');
        }
    }
});

/************************ EMAIL FEEDBACK ***********************/
function sendMail(feedbackForm) {
    console.log('working');
    emailjs.send("gmail", "feedback", {
        "from_name": feedbackForm.name.value,
        "from_email": feedbackForm.emailaddress.value,
        "user_feedback": feedbackForm.feedback.value
    })
    
    .then(
        function (response) {
            $('.form-data').val('');
            $('#feedbackModal').modal('hide');
        }
    ); return false;
}

/************************ HIGH SCORES ***********************/
function getScores() {
    highScores_Str = localStorage.getItem("scores"); //Returns a string
    if (highScores_Str === null) {
            highScores_Str = "0,0,0,0,0";
        }
    //Convert the highscores from a string to an array (of numbers):
    return highScores_Str.split(',').map(function (item) {
        return parseInt(item);
    });
}

function addScore(points) {
    highScores_Arr = getScores();
    
    if (points < highScores_Arr[4]) {
       console.log("good effort");
    } else {
        highScores_Arr.splice(4, 1, points);
        highScores_Arr.sort(function (a, b) { return b - a });
        console.log(highScores_Arr);
        localStorage.setItem("scores", highScores_Arr);
    }
}


$("#trigger").click(function() {
    highScores_Arr = getScores();
    $("#1st").html(highScores_Arr[0]);
    $("#2nd").html(highScores_Arr[1]);
    $("#3rd").html(highScores_Arr[2]);
    $("#4th").html(highScores_Arr[3]);
    $("#5th").html(highScores_Arr[4]);

});

//****************** CUSTOMISE GAME *****************




$("#gameSound").change(function() {
    let customIndex;
    let soundSetting = $("#gameSound").val();
    const sounds = {
        red: ["src='assets/sounds/red.wav' type='audio/wav'", "src='assets/sounds/cow.mp3' type='audio/mp3'", "", ""],
        green: ["src='assets/sounds/green.wav' type='audio/wav'", "src='assets/sounds/horse.mp3' type='audio/mp3'", ""],
        yellow: ["src='assets/sounds/yellow.wav' type='audio/wav'", "src='assets/sounds/goat.mp3' type='audio/mp3'", ""],
        blue: ["src='assets/sounds/blue.wav' type='audio/wav'", "src='assets/sounds/chicken.mp3' type='audio/mp3'", ""]
    };
    
    if (soundSetting.includes("default") === true) {
        customIndex = 0;
    }  

    else if (soundSetting.includes("farm") === true) {
        customIndex = 1;
    }

    else if (soundSetting.includes("flatulance") === true) {
        customIndex = 2;
    }

    else {
        customIndex = 3;
    }

console.log(sounds.red[customIndex]);
});








