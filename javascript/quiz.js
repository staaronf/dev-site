
$(".quiz-button").on("click", function() {
  const Correct = $(this).data("correct");

  if (Correct) {
      $("#answer").text("Yes Sir! There was 9.").css("color", "green");
      $(this).css("background-color", "green").css("color", "white");
  } else {
      $("#answer").text("bruh, try again").css("color", "red");
      $(this).css("background-color", "red").css("color", "white");
  }

  //disable buttons after click
  $(".quiz-button").prop("disabled", true);
});



