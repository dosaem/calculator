window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});


var str2 = "";
var stnum = "";
var num = 0;
var sum = 0;
function click(e){
  var str = this.innerHTML;
  var IV = getIvalue(e);
  str2 += this.innerHTML;
  IV.innerHTML = str2;
  
  console.log(typeof(str));
  if(str.charCodeAt() > 47 && str.charCodeAt() < 58) {
    stnum += str;
    num = Number(stnum);
    console.log(stnum);
    console.log(str);
  }
  else if(str.charCodeAt() == 43) {
    sum = sum + num;
    stnum = 0;
    console.log(sum);
  }
  else if(str.charCodeAt() == 61) {
    sum = sum + num;
    IV.innerHTML = sum;
  }
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