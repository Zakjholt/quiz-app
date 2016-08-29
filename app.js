newGame();
//Start button functionality
$(".startButton").click(function() {
    $(".info").show();
    $(this).hide();
    $(".question").first().show();
    currentQuestion = 1;
});

//Selecting answers functionality
$(".answers button").click(function() {
    $(".answers button").removeClass("selected");
    $(this).addClass("selected");
});

//When the user clicks a submit button
$(".submit").click(function() {
    if ($(this).closest(".question").find("button").hasClass("selected")) {
        if ($(this).closest(".question").find(".selected").hasClass("correct")) {
            correctAnswers++;
            updateAnswers();
            $(this).closest(".question").hide();
            $(this).closest(".question").next().show();
            currentQuestion++;
        } else { //The correct answer is highlighted, the submit button is replaced with a continue button
            $(this).closest(".question").find(".selected").css("background", "red");
            $(this).closest(".question").find(".correct").css("background", "green");
            $(this).closest(".question").find(".continue").show();
            $(this).hide();
            $(".continue").click(function() {
              $(this).closest(".question").hide();
              $(this).closest(".question").next().show();
              currentQuestion++;
            });
        }
    }
});

if (currentQuestion > 5) {
  $(".endGame").show();
}

$(".tryAgain").click(function() {
  $(".endGame").hide();
  newGame();
  updateAnswers();
  $(".info").hide();

});

function updateAnswers() {
  $(".count").text(correctAnswers);
}

function newGame() {
  correctAnswers = 0;
  currentQuestion = 0;
  $(".startButton").show();
}
