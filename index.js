window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var inputValue = "";
var num = [];
var numCount = 0;
var oper = [];
var operCount = 0;


function inputNumber() {
    stringNum += inputValue;
    num[operCount] = Number(stringNum);
    iv.innerHTML = num[operCount];
    numCount++;
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
  }

function inputOper() {
  operCount++;
  stringNum = "";
  oper[operCount] = inputValue;
  console.log(oper[1]);
  console.log(oper[2]);
}

function saemOper() {
  switch (oper[1]) {
    case "+" :
      num[0] += num[1];
      iv.innerHTML = num[0];
      operCount--;
      numCount--;
      break;
    case "*" :
      num[0] *= num[1];
      iv.innerHTML = num[0];
      operCount--;
      numCount--;
      break;
  }
}

function diffOper() {
  if(oper[1] == "+") {
    switch (oper[2]) {
      case "*" :
      num[1] *= num[2];
      console.log(num[1]);
      num[0] += num[1];
      console.log(num[0]);
      iv.innerHTML = num[0];
      operCount--;
      numCount--;
    }
  }   
  
}

function click(e){
  // 입력 받은 버튼 값
  inputValue = this.innerHTML;

  // 숫자
  if(inputValue >= "0" && inputValue <= "9" || inputValue == ".") {
     inputNumber(inputValue);
     if(operCount == 2 && oper[1] != oper[2] && numCount == 3) {
      diffOper();
    } 
  }

  // 숫자이외
  else {
    inputOper(inputValue);
    if(operCount == 2 && oper[1] == oper[2] && numCount == 2) {
      saemOper();
    }
  }
}
}
)