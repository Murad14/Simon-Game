var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


$("btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  });


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // var audio = new Audio("sounds/"+ randomChosenColour + ".mp3");
    // audio.play();
    // autoplay="true"
    // muted="muted"
    $("#" + randomChosenColour).click(function () {

        var audio = new Audio('sounds/' + randomChosenColour + '.mp3');

        audio.play();

    });
   
    
}




nextSequence();


