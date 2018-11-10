window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var preButton ="";
var preValue = 0;
var plusButtonCount = 0;
var multiButtonCount = 0;
var sum = null;
var multi = 1;
var num = null;

function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;

  // 숫자를 구분하고 화면에 출력.
  if(inputValue >= "0" && inputValue <= "9") {
    stringNum += inputValue;
    num = Number(stringNum);
    iv.innerHTML = num;
    if(preButton == "+") {
      sum += num;
    }
    else if(preButton == "*") {
      multi *= num;
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
  else if(inputValue == "*") {
    multiButtonCount++;
    preButton = inputValue;
    stringNum = "";
    if(multiButtonCount == 1) {
      multi *= num;
      }
    else if(multiButtonCount > 1) {
      iv.innerHTML = multi;
    }
  }

  // = 버튼
  else if(inputValue == "=") {
    if(preButton == "+") {
      iv.innerHTML = sum;
      preButton = "";
      plusButtonCount = 0;
      num = null;
    }
    else if(preButton == "*") {
      iv.innerHTML = multi;
      preButton = "";
      multiButtonCount = 0;
      num = null;
    }

  }
  // AC 올클리어
  else if(inputValue == "AC") {
    stringNum = "";
    preButton ="";
    plusButtonCount = 0;
    multiButtonCount = 0;
    sum = null;
    multi = 1;
    iv.innerHTML = 0;
  }
}
}
)