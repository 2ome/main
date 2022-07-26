var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;
var started = false;



// Start Game
$("h1").on("click", function () {
    if (started === false) {
        $("h1").text("level " + level);
        nextSequence();
        started = true;
    }
});


// User Click
function enableClickOnSimon() {
    $(".btn").on("click", function () {
        var userChosenColor = (this.id);
        userClickPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
    
        correctAnswer(userClickPattern.length - 1);
    });
    
}

//User cant click
function disableClickOnSimon() {
    $(".btn").off("click")
}


// Random Play

function nextSequence() {
    disableClickOnSimon();
    userClickPattern = [];
    level++;

    $("h1").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
  
    for (var i = 0; i < gamePattern.length; i++) {
        timer(i);
        disableClickOnSimon();
    }


    enableClickOnSimon();

}




// Check if user is right
function correctAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        console.log("succsess");

         if (gamePattern.length === userClickPattern.length) {
            setTimeout(function () {
                disableClickOnSimon();
                nextSequence();

            }, 1000);
        }
        else if (gamePattern.length < userClickPattern.length) {
            playSound("wrong");

            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            $("h1").html("Game Over, Click <u>here</u> to Restart");
            disableClickOnSimon();
            gameOver();
        }
    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Click <u>here</u> to Restart");
        disableClickOnSimon();
        gameOver();
    }
}

// Game Over 

function gameOver (){
    gamePattern = [];
    level = 0;
    started = false;
}



// Play Timer
function timer(i) {
    setTimeout(function () {
        $("#" + gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(gamePattern[i]);
    }, i * 500);
}

// Play Sound
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Play Animation
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
