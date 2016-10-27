

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
var result = "";
function onesPlace(number) {
  var value = parseInt(number);
  var romanNumeralValues = ["I","V","X"];
  if(value < 4){
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
  } else {
    result += romanNumeralValues[2];
  }
  return result;
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#arabicNumerals").val();
    if(checkInteger(userInput)) {

      result = onesPlace(userInput);
      console.log(result);
      $("#romanNumerals").text(result);
      result = "";
    }
  });
});
