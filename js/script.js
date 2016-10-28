

var checkInteger = function (number){
  var input = parseInt(number);
  if (typeof(input) === "number") {
    if (input >= 1 && input <= 3999){
      return true;
    } else {
        return false;
      }
  } else {
    return false;
    }
};

var convertNumber = function (number, array) {
  var result = "";
  var value = parseInt(number);

  if(value >= 1 && value < 4){
    for (i = 0; i < value; i++)
    {
    result += array[0];
    }
  } else if (value === 4) {
      result += array[0] + array[1];
  } else if(value === 5) {
      result += array[1];
  } else if(value > 5 && value < 9) {
      result += array[1];
    for (i = 0; i < value % 5; i++) {
      result += array[0];
    }
  } else if(value === 9) {
      result += array[0] + array[2];
  } else if(value === 0) {
      result = "";
  }

  return result;
};

function getRomanNumerals(number) {
  var onesArray = ["I", "V", "X"];
  var tensArray = ["X", "L", "C"];
  var hundredsArray = ["C", "D", "M"];
  var thousandsArray = ["M", "", ""];

  var places = number.split("");
  resultArray = places.reverse();
  
  ones = convertNumber(resultArray[0], onesArray);
  tens = convertNumber(resultArray[1], tensArray);
  hundreds = convertNumber(places[2], hundredsArray);
  thousands = convertNumber(places[3], thousandsArray);

  return thousands + hundreds + tens + ones;
}

$(document).ready(function(){
  $("form").submit(function(event){

    event.preventDefault();
    var userInput = $("#arabicNumerals").val();
    if(checkInteger(userInput)) {
      result = getRomanNumerals(userInput);
      console.log(result);
      $("#romanNumerals").text(result);
      result = "";
    }
  });
});
