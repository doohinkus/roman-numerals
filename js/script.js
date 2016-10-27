
var checkInteger = function (integer){
  var input = parseInt(integer);
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

function resolveOnes(number) {
  var result = "";
  var value = parseInt(number);

  for(i = 0; i < value; i++) {
    result += "I";
  }
  console.log(result);
  return result;
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#arabicNumerals").val();
    var result = "";
    var romanNumeralValues = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
    if(checkInteger(userInput)) {
      result = resolveOnes(userInput);
      console.log(result);
      $("#romanNumerals").text(result);
    }
  });
});
