$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#arabicNumerals").val();
    var result = "";
    var romanNumeralValues = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
    console.log(userInput);
    console.log(romanNumeralValues["1"]);
    result = romanNumeralValues[userInput];
    console.log(result);
    $("#romanNumerals").text(result);
  });
});
