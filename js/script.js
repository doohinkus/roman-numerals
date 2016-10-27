

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
//
// function resolveOnes(number) {
//   var value = parseInt(number);
//
//   for(i = 0; i < value; i++) {
//     result += "I";
//   }
//   console.log(result);
//   return result;
// };
//
// function resolveFives (number){
//   var value = parseInt(number);
//
//   if (value === 4){
//     result += "IV";
//     value -= 4;
//   }else if(value === 5){
//     result += "V";
//     value -= 5;
//   }else if(value === 0){
//     return result;
//   }else {
//     result += "V";
//     value -= 5;
//     resolveOnes(value.toString());
//   }
//   return result;
// }
//
// function resolveTens (number){
//   var value = parseInt(number);
//   var index = parseInt(value/10);
//   alert(index);
//
//   if(value < 4){
//     resolveOnes(value.toString());
//   } else if(value < 9){
//     resolveFives(value.toString());
//   }
//   for(i = 0; i < index; i++) {
//     if (value % 10 === 0) {
//       value -= 10;
//       result += "X";
//     }else if (value === 0){
//       return result;
//     }else{
//       result += "X";
//       value -= 10;
//       if(value < 4){
//         resolveOnes(value.toString());
//       } else if(value < 9){
//         resolveFives(value.toString());
//       }
//     }
//   }
//   if (value === 9){
//     value -= 9;
//     result += "IX";
//     return result;
//   }
//   return result;
// };
//
// function sizeOfNumber (number) {
//   var value = parseInt(number);
//   var result = "";
//
//   if (value > 900) {
//     result = resolveFiveThousands(value.toString());
//   } else if (value > 400) {
//     result = resolveThousands(value.toString());
//   } else if (value > 90) {
//     result = resolveHundreds(value.toString());
//   } else if (value > 40) {
//     result = resolveFiftys(value.toString());
//   } else if (value > 9) {
//     result = resolveTens(value.toString());
//   } else if (value > 4) {
//     result = resolveFives(value.toString());
//   } else {
//     result = resolveOnes(value.toString());
//   }
//   return result;
// }
// var romanNumeralValues = {"1":"I", "5":"V", "10":"X", "50":"L", "100":"C", "500":"D", "1000":"M"};
// var result = "";
function onesPlace(number) {
  var result = "";
  var value = parseInt(number);
  var romanNumeralValues = ["I","V","X"];
  if(value >= 1 && value < 4){
    for (i = 0; i < value; i++)
    {
      result += romanNumeralValues[0];
    }
  } else if (value === 4) {
    result += romanNumeralValues[0] + romanNumeralValues[1];
  } else if(value === 5) {
    result += romanNumeralValues[1];
  } else if(value > 5 && value < 9) {
    result += romanNumeralValues[1];
    for (i = 0; i < value % 5; i++) {
      result += romanNumeralValues[0];
    }
  } else if(value === 9) {
    result += romanNumeralValues[0] + romanNumeralValues[2];
  } else if(value === 0) {
    result = "";
  }

  return result;
};

function tensPlace(number) {
  var result = "";
  var value = parseInt(number);
  var romanNumeralValues = ["X","L","C"];
  console.log("value: ", value);

  if(value >= 1 && value < 4) {
    for (i = 0; i < value; i++)
    {
      result += romanNumeralValues[0];
    }
  } else if (value === 4) {
    result += romanNumeralValues[0] + romanNumeralValues[1];
  } else if(value === 5) {
    result += romanNumeralValues[1];
  } else if(value > 5 && value < 9) {
    result += romanNumeralValues[1];
    for (i = 0; i < value % 5; i++) {
      result += romanNumeralValues[0];
    }
  } else if(value === 9) {
    result += romanNumeralValues[0] + romanNumeralValues[2];
  } else if(value === 0) {
    result = "";
  } else {
    result += romanNumeralValues[2];
  }
  return result;
};

function hundredsPlace(number) {
  var result = "";
  var value = parseInt(number);
  var romanNumeralValues = ["C","D","M"];
  if(value >= 1 && value < 4){
    for (i = 0; i < value; i++)
    {
      result += romanNumeralValues[0];
    }
  } else if (value === 4) {
    result += romanNumeralValues[0] + romanNumeralValues[1];
  } else if(value === 5) {
    result += romanNumeralValues[1];
  } else if(value > 5 && value < 9) {
    result += romanNumeralValues[1];
    for (i = 0; i < value % 5; i++) {
      result += romanNumeralValues[0];
    }
  } else if(value === 9) {
    result += romanNumeralValues[0] + romanNumeralValues[2];
  } else if(value === 0) {
    result = "";
  } else {
      result += romanNumeralValues[2];
  }
  return result;
};
function thousandsPlace(number) {
  var result = "";
  var value = parseInt(number);
  var romanNumeralValues = ["M","-","-"];
  if(value === 0){
    result += romanNumeralValues[0];
  } else if(value >= 1 && value < 4){
    for (i = 0; i < value; i++)
    {
      result += romanNumeralValues[0];
    }
  } else if (value === 4) {
    result += romanNumeralValues[0] + romanNumeralValues[1];
  } else if(value === 5) {
    result += romanNumeralValues[1];
  } else if(value > 5 && value < 9) {
    result += romanNumeralValues[1];
    for (i = 0; i < value % 5; i++) {
      result += romanNumeralValues[0];
    }
  } else if(value === 9) {
    result += romanNumeralValues[0] + romanNumeralValues[2];
  }
  return result;
};

function getRomanNumerals(number) {
  var result = "";
  var ones = "";
  var tens = "";
  var hundreds = "";
  var thousands = "";
  var resultArray = [];
  var places = number.split("");

  resultArray = places.reverse();
  console.log("resultArray: ", resultArray);

  ones = onesPlace(resultArray[0]);
  tens = tensPlace(resultArray[1]);
  hundreds = hundredsPlace(places[2]);
  thousands = thousandsPlace(places[3]);
  result =  thousands + hundreds + tens + ones;
  console.log("tens ones: ", tens, " ", ones);


  // ones = onesPlace(places[places.length - 1]);
  // tens = tensPlace(places[places.length - 2]);
  // hundreds = hundredsPlace(places[places.length - 3]);
  // thousands = thousandsPlace(places[places.length - 4]);



  // result = thousands + hundreds + tens + ones;
    result = thousands + hundreds + tens + ones;

    // console.log(places.length);
    // console.log(resultArray);
    // result = resultArray[resultArray.length + 1 - places.length];
  return result;
}

$(document).ready(function(){
  $("form").submit(function(event){
    var result = "";
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
