var result = "";

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

function resolveOnes(number) {
  var value = parseInt(number);

  for(i = 0; i < value; i++) {
    result += "I";
  }
  console.log(result);
  return result;
};

function resolveFives (number){
  var value = parseInt(number);

  if (value === 4){
    result += "IV";
    value -= 4;
  }else if(value === 5){
    result += "V";
    value -= 5;
  }else if(value === 0){
    return result;
  }else {
    result += "V";
    number -= 5;
    resolveOnes(number.toString());
  }
  return result;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#arabicNumerals").val();
    var romanNumeralValues = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
    if(checkInteger(userInput)) {
      result = resolveFives(userInput);
      console.log(result);
      $("#romanNumerals").text(result);
      result = "";
    }
  });
});
