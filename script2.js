
function num(num1, num2){

  if (num1 == num2){
    alert(num1 + " is equal to " + num2);
  } else if (num1 > num2){
    alert(num1 + " is greater than " + num2);
  } else {
    alert(num1 + " is less than " + num2);
  }
}

var checkNum = num(3, 2);

console.log(checkNum);
