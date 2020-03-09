// variables
const colorPool = ["red", "green", "yellow", "blue"];
const milliseconds = {
    stageOne: 1000,
    stageTwo: 700,
    stageThree: 400
};
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

let colorComp = [];
let points = 0;
let index = 0;
let userArray = [];
let highScoresStr = "";
let highScoresArr;
let delay = milliseconds.stageOne;
let customIndex;
let soundSetting = getAudio();

/**
 * playgame() takes a value at random from the ColorPool array
 * and adds it as the last index of the colorComp array.
 */
function playGame() {
    $("#play-btn").fadeOut(1000);
    let i = 0;

    colorComp[colorComp.length] =
        colorPool[Math.floor(Math.random() * colorPool.length)];

    /**
     * setInterval() iterates through the colorComp array.
     * Takes the value at each index and creates a class and an id
     * The id targets the relevant div element in the document.
     * The class applies a set of CSS styles to the div until the SetTimeout function ends and the class is removed.
     */
    let timer = setInterval(() => {
        if (i === colorComp.length - 1) {
            $(".color-btn")
                .children()
                .removeClass("unclickable");
            clearInterval(timer);
        }
        let colorId = "#" + colorComp[i],
            colorClass = colorComp[i],
            sound = new Howl({
                src: [audioSource(colorComp[i])],
                onplay: () => {
                    $(colorId).addClass(colorClass);
                    $(colorId)
                        .parent()
                        .addClass("glowlayer");
                },
                onend: () => {
                    $(colorId).removeClass(colorClass);
                    $(colorId)
                        .parent()
                        .removeClass("glowlayer");
                }
            });
        sound.play();
        i++;
    }, delay);
}

/********************** USER INPUT **********************/
$(".color-btn")
    .children()
    .click(function() {
        let colorClass = this.id,
            colorId = "#" + this.id,
            sound = new Howl({
                src: [audioSource(colorClass)]
            });

        userArray[userArray.length] = colorClass;
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
    });

/**
 * compareIndex() is called every time a colour is clicked on.
 * compareIndex() compares each index in the accumulating userArray, against the corresponding index in the colorComp array.
 * If the arrays have matching values and length, clear the user array ready for the next round
 * If the values match but the arrays are not the same length, allows the user to add the next colour.
 * If two values don't match, game over.
 */
function compareIndex() {
    if (userArray[index] === colorComp[index]) {
        if (userArray.length === colorComp.length) {
            userArray = [];
            index = 0;
            points += 5;
            $("#score").html("points: " + points);

            setTimeout(() => {
                $(".color-btn")
                    .children()
                    .addClass("unclickable");
                levelup();
                playGame();
            }, 1000);
        } else {
            index++;
        }
    } else {
        $("#gamescore").html(points);
        $("#gameOver").modal();
        addScore(points);
        $("#gameOver")
            .on("hide.bs.modal", () => {
                location.reload();
            })
            .modal("show");
    }
}

/************************ LEVEL UP ************************/
function levelup() {
    if (points >= 20) {
        delay = milliseconds.stageTwo;
    } else if (points == 40) {
        delay = milliseconds.stageThree;
    } else {
        delay = milliseconds.stageOne;
    }
}
/************************ HIGH SCORES ***********************/
/* getScores() fetches the highscores from local storage, which are returned as a single string
 * If there is no data available, the string is set to to 0,0,0,0,0
 * The highscores  string is converted from a string to an array (of numbers). Code Courtesy of Stack Overflow
 */
function getScores() {
    highScoresStr = localStorage.getItem("scores");
    if (highScoresStr === null) {
        highScoresStr = "0,0,0,0,0";
    }

    return highScoresStr.split(",").map(function(item) {
        return parseInt(item);
    });
}

/*
 * addScore() retrieves the current highscores as a numbered array by calling getScores()
 * First, it Checks to see that the points for that session is greater than the smallest highscore value.
 * If yes, it removes the smallest value from the highscores array and replaces it with the new score
 * The highscores array is then re-sorted to make sure the values are presented in descending order
 * Saves the updated highscores array back to the local storage
 */
function addScore(points) {
    highScoresArr = getScores();

    if (points < highScoresArr[4]) {
    } else {
        highScoresArr.splice(4, 1, points);
        highScoresArr.sort(function(a, b) {
            return b - a;
        });
        localStorage.setItem("scores", highScoresArr);
    }
}

/* When the trigger button is clicked, retrieves the current highscores as a numbered array by calling getScores() and populates a table
 * Iterates through the array to see if any of the values are zero. If yes, the value is replaced with "No Data Found"
 * The html for each of the table data elements is populated with the values of the each array index respectively
 */
$("#trigger").click(() => {
    highScoresArr = getScores();
    for (let i = 0; i < 5; i++) {
        if (highScoresArr[i] == 0) {
            highScoresArr[i] = "No data found";
        }
    }
    $("#1st").html(highScoresArr[0]);
    $("#2nd").html(highScoresArr[1]);
    $("#3rd").html(highScoresArr[2]);
    $("#4th").html(highScoresArr[3]);
    $("#5th").html(highScoresArr[4]);
});

//****************** GAME CUSTOMISATION *****************
/* When the settings modal is closed, refresh the values and set the local storage to the default values */
$(gameSettings).on("show.bs.modal", () => {
    $("#gameSound").val(soundSetting);
});

$("#settingX").click(() => {
    $("#custom-options").trigger("reset");
    setStorage();
    $("#gameSettings").modal("hide");
});

function submitSettings() {
    setStorage();
    $("#gameSettings").modal("hide");
    return false;  
}

/*setStorage() takes the value of Game Sounds drop down and stores them as the selected value in local storage*/
function setStorage() {
    let preference = $("#gameSound").val();
    localStorage.setItem("audio-pref", preference);
}

/* getAudio() takes the value of Game Sounds drop down and stores as the selected value in local storage */
function getAudio() {
    let prefs = localStorage.getItem("audio-pref");
    if (prefs === null) {
        prefs = "default";
    }
    return prefs;
}

function audioSource(colour) {
    soundSetting = getAudio();
    if (soundSetting.includes("default") === true) {
        customIndex = 0;
    } else if (soundSetting.includes("farm") === true) {
        customIndex = 1;
    } else if (soundSetting.includes("flatulence") === true) {
        customIndex = 2;
    } else if (soundSetting.includes("harpsichord") === true) {
        customIndex = 3;
    } else {
        return ;
    }

    return sounds[colour][customIndex];
}

/************************ EMAIL FEEDBACK ***********************/
(() => {
    emailjs.init("user_ZLm8FPXGvg2bfyfHS3yIq");
})();
function sendMail(feedbackForm) {
    emailjs
        .send("gmail", "feedback", {
            from_name: feedbackForm.name.value,
            from_email: feedbackForm.emailaddress.value,
            user_feedback: feedbackForm.feedback.value
        })
        .then(() => {
            $(".form-data").val("");
            $("#feedbackModal").modal("hide");
        });
    return false;
}
