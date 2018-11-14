window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var num = [];
var numIndex = 0;
var oper = [];


function inputNumber(inputValue) {
  if(num.length == oper.length) {
    stringNum += inputValue;
    num.push(Number(stringNum));
    var numLength = num.length;
    iv.innerHTML = num[numLength-1];
  }    
  }

function inputOper(inputValue) {
  // numIndex++;
  stringNum = "";
  oper.push(inputValue);
}

function init() {
  console.log(num);
  console.log(oper);
  iv.innerHTML = num[0];
  oper.pop();
  num.pop();
  console.log(num);
  console.log(oper);
}



function operlator() {
    if(oper[0] == "+" && oper[1] == "+"){
      num[0] += num[1];
      init();
    }
    else if(oper[0] == "+" && oper[1] == "-") {
      num[0] += num[1];
      oper[0] = oper[1];
      init();
    }
    else if(oper[0] == "-" && oper[1] == "+") {
      num[0] -= num[1];
      oper[0] = oper[1];
      init();
    }
    else if(oper[0] == "-" &&oper[1] == "-") {
      num[0] -= num[1];
      init();
    }
    else if(oper[0] == "*") {
      num[0] *= num[1];
      oper[0] = oper[1];
      init();
    }
    else if(oper[0] == "/") {
      num[0] /= num[1];
      oper[0] = oper[1];
      init();
    }
    if((oper[0] == "+" || oper[0] == "-") && oper[1] == "*" && oper.length == 3){
      num[1] *= num[2];
      iv.innerHTML = num[2];
      oper[1] = oper[2];
      console.log("Error");
      init();
      if(oper[1] == "+" || oper[1] == "-") {
        operlator();       
      }
      else if(oper[1] == "*" || oper[1] == "/") {
        iv.innerHTML = num[1];
      }
      else if(oper[1] == "=") {
        equlOper();      
      }
    }
    else if((oper[0] == "+" || oper[0] == "-") && oper[1] == "/" && oper.length == 3) {
      num[1] /= num[2];
      iv.innerHTML = num[2];
      oper[1] = oper[2];
      init();
      if(oper[1] == "+" || oper[1] == "-") {
        operlator();       
      }
      else if(oper[1] == "*" || oper[1] == "/") {
        iv.innerHTML = num[1];
      }
      else if(oper[1] == "=") {
        equlOper();      
      }
    }
  }

  function initAc() {
      stringNum = "";
      num = [];
      // numIndex = 0;
      oper = [];
      iv.innerHTML = 0;
      console.log(oper);
      console.log(num);

  }

  function equlOper() {
    switch(oper[0]) {
      case "+" :
      var initV = num[0] + num[1];
      initAc();
      num[0] = initV;
      iv.innerHTML = num[0];
      console.log(num);
      break;
      case "-" :
      var initV = num[0] - num[1];
      initAc();
      num[0] = initV;
      iv.innerHTML = num[0];
      console.log(num);
      break;
      case "*" :
      var initV = num[0] * num[1];
      initAc();
      num[0] = initV;
      iv.innerHTML = num[0];
      console.log(num);
      break;
      case "/" :
      var initV = num[0] / num[1];
      initAc();
      num[0] = initV;
      iv.innerHTML = num[0];
      console.log(num);
      break;
    }
  }




function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;

  // 숫자받기
  if(inputValue >= "0" && inputValue <= "9" || inputValue == ".") {
    console.log(num);
     inputNumber(inputValue);
     console.log("hi");
     console.log(num);
  }

  // 숫자이외
  else {
    inputOper(inputValue);
    console.log(oper.length);
    console.log(oper);
    if(inputValue == "AC") {
      initAc();
    }
      if(oper.length == 2 && inputValue == "=") {
        equlOper();
      }
      operlator();
    }
    } 
  }
)