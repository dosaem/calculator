window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");
var stringNum = "";

function click(e){
  // 입력 받은 버튼 값
  var inputValue = this.innerHTML;

  // 숫자를 구분하고 화면에 출력.
  if(inputValue.charCodeAt() > 47 && inputValue.charCodeAt() < 58) {
    stringNum += inputValue;
    num = Number(stringNum);
    iv.innerHTML = num;
  }
}
}
)