window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});


var str2 = "";
var stnum = "";
var preBt = "";
var num = 0;
var sum = 0;
var multi = 1;
var result = 0;

function click(e){
  var str = this.innerHTML;
  var IV = getIvalue(e);
  str2 += this.innerHTML;
  IV.innerHTML = str2;
  
  
  console.log(typeof(str));
  // 숫자
  if(str.charCodeAt() > 47 && str.charCodeAt() < 58) {
    stnum += str;
    num = Number(stnum);
    console.log(stnum);
    console.log(str);
    console.log(num);
  }
  // 더하기
  else if(str.charCodeAt() == 43) {
    preBt = str;
    sum = sum + num;
    stnum = 0;
    console.log(sum);
  }

  // 곱하기
  else if(str.charCodeAt() == 42) {
    preBt = str;
    multi = multi * num;
    stnum = 0;
    console.log(multi);
  }

  // 등호
  else if(str.charCodeAt() == 61) {
    if(preBt.charCodeAt() == 43) {
      result = sum + num;
    }
    else if(preBt.charCodeAt() == 42) {
      result = multi * num;
    }
    IV.innerHTML = result;
  }

  // AC, 올클리어
  else if(str == "AC") {
    IV.innerHTML = 0;
    str = 0;
    str2 = "";
    num = 0;
    sum = 0;
    stnum = 0;
  }
}

function getIvalue(e) {
  return document.getElementById("ivalue");
}

}
)