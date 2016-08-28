var correctAnswers = 0;
$(document).ready(function() {

});

//Start button functionality
$(".startButton").click(function() {
    $(this).hide();
    $(".question").first().show();
    $(".info").show();
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
        } else { //The correct answer is highlighted, the submit button is replaced with a continue button
            $(this).closest(".question").find(".selected").css("background", "red");
            $(this).closest(".question").find(".correct").css("background", "green");
            $(this).closest(".question").append("<button class='continue'>Continue ></button>");
            $(this).hide();
            $(".continue").click(function() {
              $(this).closest(".question").hide();
              $(this).closest(".question").next().show();
            });
        }
    }
});


function updateAnswers() {
  $(".count").text(correctAnswers);
}
