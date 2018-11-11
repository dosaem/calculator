window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var num0 = null;
var num1 = null;
var num2 = null;
var opercount = 0;

function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;

  // 숫자
  if(inputValue >= "0" && inputValue <= "9" || inputValue == ".") {
    switch(opercount) {
      case 0 :
      stringNum += inputValue;
      num0 = Number(stringNum);
      iv.innerHTML = num0;
      break;
      case 1 :
      stringNum += inputValue;
      num1 = Number(stringNum);
      iv.innerHTML = num1;
      break;
      case 2 :
      stringNum += inputValue;
      num2 = Number(stringNum);
      iv.innerHTML = num2;
      break;
    }
  }

  // 숫자이외
  else {
    opercount++;
    stringNum = "";
  }
}
}
)