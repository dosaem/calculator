window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";
var preButton ="";
var preButtonCount = 0;
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

  else if(inputValue == "+") {
    preButtonCount++;
    preButton = inputValue;
    stringNum = "";
    if(preButtonCount == 1) {
      sum += num;
    }
    if(preButtonCount > 1) {
      iv.innerHTML = sum;
    }
  }


}
}
)