window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var num = [];
var oper = [];


function inputNumber(inputValue) {
    stringNum += inputValue;
    num.push(Number(stringNum));
    iv.innerHTML = num[num.length - 1];
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);
  }

function inputOper(inputValue) {
  stringNum = "";
  oper.push(inputValue);
  console.log(oper[0]);
  console.log(oper[1]);
}

function saemOper() {
  switch (oper[1]) {
    case "+" :
      num[0] += num[1];
      iv.innerHTML = num[0];
      oper.pop();
      num.pop();
      break;
    case "*" :
      num[0] *= num[1];
      iv.innerHTML = num[0];
      oper.pop();
      num.pop();
      break;
  }
}

function diffOper() {
  if(oper[0] == "+") {
    switch (oper[1]) {
      case "*" :
      num[1] *= num[2];
      console.log(num[1]);
      num[0] += num[1];
      console.log(num[0]);
      iv.innerHTML = num[0];
      oper.pop();
      num.pop();
    }
  }   
  
}

function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;

  // 숫자받기 및 연산
  if(inputValue >= "0" && inputValue <= "9" || inputValue == ".") {
     inputNumber(inputValue);
  }

  // 숫자이외 받기 및 출력
  else {
    inputOper(inputValue);
    if(oper.length == 1 && oper[1] == oper[2] && num.length == 1) {
      saemOper();
    }
  }
}
}
)