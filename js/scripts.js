$(document).ready(function() {
  var age = parseInt(prompt("What is your age?"));

  if(age >= 18) {
    $("#old").show();
  } else if(age < 18) {
    $("#young").show();
  } else {
    $("#minor").show();
  }
});
