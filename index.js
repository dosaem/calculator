window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});


var str2 = "";
var num = 0;
var sum = 0;
function click(e){
  var str = this.innerHTML;
  str2 += this.innerHTML;
  document.getElementById("ivalue").innerHTML = str2;

  if(str.charCodeAt() > 47 && str.charCodeAt() < 58) {
    num = Number(str);
  }
  else if(str.charCodeAt() == 43) {
    sum = sum + num;
    console.log(sum);
  }
  else if(str.charCodeAt() == 61) {
    sum = sum + num;
    document.getElementById("ivalue").innerHTML = sum;
  }
}
})