window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var numArray = [];
var oper = [];


function inputNumber(inputValue) {
  stringNum += inputValue;
  num = Number(stringNum);
  iv.innerHTML = num;
}

function inputOper(inputValue) {
  stringNum = "";
  oper.push(inputValue);
}

function init() {
  iv.innerHTML = numArray[0];
  oper.pop();
  numArray.pop();
}



function operlator() {
    if(oper[0] == "+" && oper[1] == "+"){
      numArray[0] += numArray[1];
      init();
    }
    else if(oper[0] == "+" && oper[1] == "-") {
      numArray[0] += numArray[1];
      oper[0] = oper[1];
      init();
    }
    else if(oper[0] == "-" && oper[1] == "+") {
      numArray[0] -= numArray[1];
      oper[0] = oper[1];
      init();
    }
    else if(oper[0] == "-" &&oper[1] == "-") {
      numArray[0] -= numArray[1];
      init();
    }
    else if(oper[0] == "*") {
      numArray[0] *= numArray[1];
      oper[0] = oper[1];
      init();
    }
    else if(oper[0] == "/") {
      numArray[0] /= numArray[1];
      oper[0] = oper[1];
      init();
    }
    if((oper[0] == "+" || oper[0] == "-") && oper[1] == "*" && oper.length == 3){
      numArray[1] *= numArray[2];
      iv.innerHTML = numArray[2];
      oper[1] = oper[2];
      init();
      if(oper[1] == "+" || oper[1] == "-") {
        operlator();       
      }
      else if(oper[1] == "*" || oper[1] == "/") {
        iv.innerHTML = numArray[1];
      }
      else if(oper[1] == "=") {
        equlOper();      
      }
    }
    else if((oper[0] == "+" || oper[0] == "-") && oper[1] == "/" && oper.length == 3) {
      numArray[1] /= numArray[2];
      iv.innerHTML = numArray[2];
      oper[1] = oper[2];
      init();
      if(oper[1] == "+" || oper[1] == "-") {
        operlator();       
      }
      else if(oper[1] == "*" || oper[1] == "/") {
        iv.innerHTML = numArray[1];
      }
      else if(oper[1] == "=") {
        equlOper();      
      }
    }
  }

  function initAc() {
      stringNum = "";
      numArray = [];
      oper = [];
      iv.innerHTML = 0;
  }

  function equlOper() {
    switch(oper[0]) {
      case "+" :
      num = numArray[0] + numArray[1];
      initAc();
      iv.innerHTML = num;
      break;
      case "-" :
      num = numArray[0] - numArray[1];
      initAc();
      iv.innerHTML = num;
      break;
      case "*" :
      num = numArray[0] * numArray[1];
      initAc();
      iv.innerHTML = num;
      break;
      case "/" :
      num = numArray[0] / numArray[1];
      initAc();
      iv.innerHTML = num;
      break;
    }
  }

function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;

  // 숫자받기
  if(inputValue >= "0" && inputValue <= "9" || inputValue == ".") {
    inputNumber(inputValue);
  }

  // 숫자이외
  else {
    console.log(num);
    numArray.push(num);
    inputOper(inputValue);
    if(inputValue == "AC") {
      initAc();
    }
    else if(oper.length == 2 && inputValue == "=") {
      equlOper();
    }
    else if(oper.length == 2 && inputValue != "="){
      operlator();
    }
    }
  } 
  }
)