
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


$(".btn").click(function(event){
    
    let userChosenColour  = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

});

function nextSequence()
{
    let randomNumber = Math.round(Math.random()*3); //random number 0-3
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("." + randomChosenColour).delay(100).fadeOut().fadeIn('slow')
    playSound(randomChosenColour);
}

function playSound(colourName)
{
    let audio = new Audio("sounds/" +colourName + ".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $("." + currentColour).addClass("pressed"); 
    setTimeout(function () {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}



