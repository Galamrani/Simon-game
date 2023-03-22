var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameIsOn = false;
var level = 0;



$(document).keypress(function(){
    if (!gameIsOn)
    {
        $("#level-title").text("Level - " + level);
        nextSequence();
        gameIsOn = true;
    }

});

$(".btn").click(function(event){
    
    let userChosenColour  = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel)
{
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 500);
        }
    }
    else
    {
        playSound("wrong");
        animateGameOver();
        startOver();
    }

}

function nextSequence()
{
    userClickedPattern = [];
    gamePattern = [];
    level++;
    $("#level-title").text("Level - " + level);
    let randomNumber = Math.round(Math.random()*3); //random number 0-3
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("." + randomChosenColour).delay(100).fadeOut().fadeIn('slow')
    playSound(randomChosenColour);
    
}

function playSound(name)
{
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour)
{
    $("." + currentColour).addClass("pressed"); 
    setTimeout(function () {
        $("." + currentColour).removeClass("pressed");
    }, 100);

}

function animateGameOver()
{
    $("body").addClass("game-over"); 
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

}

function startOver()
{
    level = 0;
    gameIsOn = false;
    userClickedPattern = [];
    gamePattern = [];

}
