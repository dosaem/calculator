window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var numArray = [0];
var oper = [];

function inputNumber(inputValue) {
  numArray[oper.length] = Number(String(numArray.pop()) + inputValue);
  return numArray[oper.length];
}

function inputOper(inputValue) {
    oper.push(inputValue);
}

function init() {
  oper[0] = oper[1];
  iv.innerHTML = numArray[0];
  oper.pop();
  numArray.pop();
}

function initAc() {
  numArray = [0];
  oper = [];
  iv.innerHTML = numArray[0];
}

function arithmetic () {
  switch (oper[0]) {
    case "+" :
    numArray[0] += numArray[1];
    init();
    break;
    case "-" :
    numArray[0] -= numArray[1];
    init();
    break;
    case "*" :
    numArray[0] *= numArray[1];
    init();
    break;
    case "/" :
    numArray[0] /= numArray[1];
    init();
    break;
  }
}

function operlator() {
//     if((oper[0] == "+" || oper[0] == "-") && oper[1] == "*" && oper.length == 3){
//       numArray[1] *= numArray[2];
//       iv.innerHTML = numArray[2];
//       oper[1] = oper[2];
//       init();
//       if(oper[1] == "+" || oper[1] == "-") {
//         operlator();       
//       }
//       else if(oper[1] == "*" || oper[1] == "/") {
//         iv.innerHTML = numArray[1];
//       }
//       else if(oper[1] == "=") {
//         equlOper();      
//       }
//     }
//     else if((oper[0] == "+" || oper[0] == "-") && oper[1] == "/" && oper.length == 3) {
//       numArray[1] /= numArray[2];
//       iv.innerHTML = numArray[2];
//       oper[1] = oper[2];
//       init();
//       if(oper[1] == "+" || oper[1] == "-") {
//         operlator();       
//       }
//       else if(oper[1] == "*" || oper[1] == "/") {
//         iv.innerHTML = numArray[1];
//       }
//       else if(oper[1] == "=") {
//         equlOper();      
//       }
//     }
  }



//   function equlOper() {
//     switch(oper[0]) {
//       case "+" :
//       num = numArray[0] + numArray[1];
//       initAc();
//       iv.innerHTML = num;
//       break;
//       case "-" :
//       num = numArray[0] - numArray[1];
//       initAc();
//       iv.innerHTML = num;
//       break;
//       case "*" :
//       num = numArray[0] * numArray[1];
//       initAc();
//       iv.innerHTML = num;
//       break;
//       case "/" :
//       num = numArray[0] / numArray[1];
//       initAc();
//       iv.innerHTML = num;
//       break;
//     }
//   }

function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;

  // 숫자받기
  if(inputValue >= "0" && inputValue <= "9") {
    iv.innerHTML = inputNumber(inputValue);
  }

  // else if(inputValue == ".") {
  //   iv.innerHTML = numArray.pop() + ".";
  // }

  // 숫자이외

  else if(inputValue == "-" && numArray.length == 0) {
    oper[0] = "-";
  }

  else {
    numArray.push(num);
    inputOper(inputValue);

    // if(inputValue == "AC") {
    //   initAc();
    // }

  //   else if(inputValue == "+/-") {
  //     if(num < 0) {
  //       num = Math.abs(num);
  //       iv.innerHTML = num;
  //       oper.shift();
  //       numArray.shift(); 
  //     }
  //     else {
  //       num *= -1;
  //       iv.innerHTML = num;
  //       oper.shift();
  //       numArray.shift(); 
  //     }
  //   }
  //   else if(inputValue == "%") {
  //       num /= 100;
  //       iv.innerHTML = num;
  //       oper.shift();
  //       numArray.shift(); 

  //   }
  //   else if(oper.length == 2 && inputValue == "=") {
  //     equlOper();
  //   }
  //   else if(oper.length == 2 && inputValue != "="){
  //     operlator();
  //   }
  //   else if(oper.length == 3) {
  //     operlator();
  //   }
    }
    } 
  }
)