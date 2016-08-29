//Set answer Key
var Key = {
    i: "G major",
    ii: "Eighth note",
    iii: "C E G",
    iv: "Percussion",
    v: "F# minor"
};

var userAnswers = Object.create(Key);
var correctAnswers;


$(".startButton").click(function() {
  $(this).closest("div").hide();
  newGame();

});


$(".answers button").click(function() {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
});

$(".submit").click(function() {
  var input = this;
  input.disabled = true;
  setTimeout(function() {
     input.disabled = false;
  }, 3000);
  var thisQuestion = $(this).closest(".question");
  var nextQuestion = function() {
    $(".question").hide();
    $(".count").text(correctAnswers);
    thisQuestion.next().show();
  };
  userAnswers[thisQuestion.prop("id")] = thisQuestion.find(".selected").text();
  if (userAnswers[thisQuestion.prop("id")] === Key[thisQuestion.prop("id")]) {
    correctAnswers++;
    nextQuestion();
  } else {
    $(this).hide();
    thisQuestion.find(".selected").addClass("red");
    thisQuestion.find(".correct").addClass("green");
    thisQuestion.find(".continue").show();
    $(".continue").click(function() {
      nextQuestion();
    });
  }
});

$(".endGame button").click(function() {
  $(".green").removeClass("green");
  $(".red").removeClass("red");
  $(".continue").hide();
  $(".submit").show();
});

//Functions

function newGame() {
  for (var prop in userAnswers) {
    userAnswers[prop] = null;
  }
  correctAnswers = 0;
  $(".count").text(correctAnswers);
  $("#i").show();
  $(".info").show();
}
