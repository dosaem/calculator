window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var preButton ="";
var plusButtonCount = 0;
var multiButtonCount = 0;
var sum = 0;

function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;
  console.log(inputValue);


  // 숫자를 구분하고 화면에 출력.
  if(inputValue >= "0" && inputValue <= "9") {
    stringNum += inputValue;
    num = Number(stringNum);
    iv.innerHTML = num;
    if(preButton == "+") {
      sum += num;
    }
  }

  // 더하기
  else if(inputValue == "+") {
    plusButtonCount++;
    preButton = inputValue;
    stringNum = "";
    if(plusButtonCount == 1) {
      sum += num;
    }
    else if(plusButtonCount > 1) {
      iv.innerHTML = sum;
    }
  }

  // 곱하기
  // else if(inputValue == "*") {
  //   multiButtonCount++;


  // }

  // = 버튼
  else if(inputValue == "=") {
    if(preButton == "+") {
      iv.innerHTML = sum;
      preButton = "";
      plusButtonCount = 0;
      num = 0;
    }

  }
  // AC 올클리어
  else if(inputValue == "AC") {
    stringNum = "";
    preButton ="";
    plusButtonCount = 0;
    sum = 0;
    iv.innerHTML = 0;
  }


}
}
)