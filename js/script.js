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
    value -= 5;
    resolveOnes(value.toString());
  }
  return result;
}

function resolveTens (number){
  var value = parseInt(number);
  var index = parseInt(value / 10);

  for(i = 0; i < index; i++) {
    if (value % 10 === 0) {
      value -= 10;
      result += "X";
    }else if (value === 0){
      return result;
    }else{
      result += "X";
      value -= 10;
      if(value < 3){
        resolveOnes(value.toString());
      } else if(value < 9){
        resolveFives(value.toString());
      }
    }
  }
  if (value === 9){
    value -= 9;
    result += "IX";
    return result;
  }
  return result;
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#arabicNumerals").val();
    var romanNumeralValues = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
    if(checkInteger(userInput)) {
      result = resolveTens(userInput);
      console.log(result);
      $("#romanNumerals").text(result);
      result = "";
    }
  });
});
