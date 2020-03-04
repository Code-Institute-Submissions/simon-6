let colorComp = [],
    points = 0,
    userArray = [],
    highScores_Str,
    highScores_Arr;

/**
 * playgame() takes a value at random from the ColorPool array
 * and adds it as the last index of the colorComp array.
 */
function playGame() {
    $("#play_btn").fadeOut(1000);
    const colorPool = ["red", "green", "yellow", "blue"];
    let i = 0;

    colorComp[colorComp.length] =
        colorPool[Math.floor(Math.random() * colorPool.length)];

    /**
     * setInterval() iterates through the colorComp array. 
     * It takes the value at each index and creates a class and 2 id's, 
     * Stores them in separate variables. 
    
     * One id is used to target a sound clip. The other is used to target the relevant div element in the document. 
     *The class is then used to apply a set of CSS styles to the div until the SetTimeout function ends and the class is removed.
     */
    let timer = setInterval(function() {
        if (i === colorComp.length -1) {
            $(".color_btn")
                .children()
                .removeClass("unclickable");
            clearInterval(timer);
        }

        let colorId = "#" + colorComp[i],
            colorClass = colorComp[i],
            sound = new Howl({ 
                src: [audioSource(colorComp[i])] 
            });

        $(colorId).addClass(colorClass);
        $(colorId)
            .parent()
            .addClass("glowlayer");
        sound.play();
        setTimeout(function() {
            $(colorId).removeClass(colorClass);
            $(colorId)
                .parent()
                .removeClass("glowlayer");
        }, 800);

        i++;
    }, 1000);
} //close of PlayGame function.

/********************** USER INPUT **********************/

let i = 0; //i must be declared outside the function so that i can increment everytime a user clicks to add to the array

$(".color_btn")
    .children()
    .click(function() {
        let colorClass = this.id,
            colorId = "#" + this.id,
            sound = new Howl({ 
                src: [audioSource(colorClass)] 
            });

        userArray[userArray.length] = colorClass;
        //console.log(colorId + "/." + colorClass + "/" + soundId);
        console.log(userArray + " vs " + colorComp);

        $(colorId).addClass(colorClass + " unclickable");
        $(colorId)
            .parent()
            .addClass("glowlayer");
        sound.play();

        setTimeout(() => {
            $(colorId).removeClass(colorClass + " unclickable");
            $(colorId)
                .parent()
                .removeClass("glowlayer");
        }, 400);

        setTimeout(() => {
            compareIndex();
        }, 500);

        /**
         * compareIndex() is called every time a colour is clicked on.
         * compareIndex() compares each index in the accumulating userArray, against the corresponding index in the colorComp array.
         */
        function compareIndex() {
            if (userArray[i] === colorComp[i]) {
                if (userArray.length === colorComp.length) {
                    // if the arrays have matching values and length, clear the user array ready for the next round
                    //console.log(userArray[i] + " vs " + colorComp[i]);
                    userArray = [];
                    i = 0;
                    points += 5;
                    $("#score").html("points: " + points);

                    setTimeout(() => {
                        $(".color_btn")
                            .children()
                            .addClass("unclickable");
                        levelup(); //lines 139-157
                        playGame(); //lines 11-56
                    }, 1000);
                }

                //if the values match but the arrays are not the same length, allows the user to add the next colour.
                else {
                    i++;
                }
            }

            //if two values don't match, game over.
            else {
                $("#gamescore").html(points);
                $("#gameOver").modal();
                addScore(points);
                $("#gameOver")
                    .on("hide.bs.modal", function() {
                        location.reload();
                    })
                    .modal("show");
            }
        }
    });

/************************ LEVEL UP ************************/
let delay;
let milliseconds = {
    stageOne: 1000,
    stageTwo: 700,
    stageThree: 400
};

function levelup() {
    if (points == 20) {
        delay = milliseconds.stageTwo;
        console.log("level up!");
    } else if (points == 40) {
        delay = milliseconds.stageThree;
        console.log("level up");
    } else {
        delay = milliseconds.stageOne;
        console.log("level unchanged");
    }
}

/************************ HIGH SCORES ***********************/
function getScores() {
    highScores_Str = localStorage.getItem("scores"); //Returns a string
    if (highScores_Str === null) {
        highScores_Str = "0,0,0,0,0";
    }
    //Convert the highscores from a string to an array (of numbers):
    return highScores_Str.split(",").map(function(item) {
        return parseInt(item);
    });
}

function addScore(points) {
    highScores_Arr = getScores();

    if (points < highScores_Arr[4]) {
        console.log("good effort");
    } else {
        highScores_Arr.splice(4, 1, points);
        highScores_Arr.sort(function(a, b) {
            return b - a;
        });
        console.log(highScores_Arr);
        localStorage.setItem("scores", highScores_Arr);
    }
}

$("#trigger").click(function() {
    highScores_Arr = getScores();
    console.log(highScores_Arr);
    $("#1st").html(highScores_Arr[0]);
    $("#2nd").html(highScores_Arr[1]);
    $("#3rd").html(highScores_Arr[2]);
    $("#4th").html(highScores_Arr[3]);
    $("#5th").html(highScores_Arr[4]);
});

//****************** GAME CUSTOMISATION *****************
function returntoDefault() {
$('#custom-options').trigger("reset");
$("#gameSettings").modal("hide");
return false;
}

function setStorage() {
    console.log("function executed");
    let preference = $("#gameSound").val();
    localStorage.setItem("audio-pref", preference);
    $("#gameSettings").modal("hide");
    return false;
}

function audioSource(colour) {

    let customIndex;
    let soundSetting = localStorage.getItem("audio-pref");
    const sounds = {
        red: [
            "assets/sounds/red.mp3",
            "assets/sounds/cow.mp3",
            "assets/sounds/fart-1.mp3",
            "assets/sounds/note-1.mp3",
            "assets/sounds/null.mp3"
        ],
        green: [
            "assets/sounds/green.mp3",
            "assets/sounds/horse.mp3",
            "assets/sounds/fart-2.mp3",
            "assets/sounds/note-2.mp3",
            "assets/sounds/null.mp3"
        ],
        yellow: [
            "assets/sounds/yellow.mp3",
            "assets/sounds/goat.mp3",
            "assets/sounds/fart-3.mp3",
            "assets/sounds/note-3.mp3",
            "assets/sounds/null.mp3"
        ],
        blue: [
            "assets/sounds/blue.mp3",
            "assets/sounds/pig.mp3",
            "assets/sounds/fart-4.mp3",
            "assets/sounds/note-4.mp3",
            "assets/sounds/null.mp3"
        ]
    };

    if (soundSetting.includes("default") === true) {
        customIndex = 0;
    } else if (soundSetting.includes("farm") === true) {
        customIndex = 1;
    } else if (soundSetting.includes("flatulence") === true) {
        customIndex = 2;
    } else if (soundSetting.includes("harpsichord") === true) {
        customIndex = 3;
    } else {
        customIndex = 4;
    }

    return sounds[colour][customIndex];

}


/************************ EMAIL FEEDBACK ***********************/
(function() {
    emailjs.init("user_ZLm8FPXGvg2bfyfHS3yIq");
})();

function sendMail(feedbackForm) {
    emailjs
        .send("gmail", "feedback", {
            from_name: feedbackForm.name.value,
            from_email: feedbackForm.emailaddress.value,
            user_feedback: feedbackForm.feedback.value
        })

        .then(function(response) {
            $(".form-data").val("");
            $("#feedbackModal").modal("hide");
        });
    return false;
}
