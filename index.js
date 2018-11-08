window.addEventListener('DOMContentLoaded', function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
  Array.prototype.forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});

var iv = document.getElementById("ivalue");

function click(e){
  // 화면표시부
  var str = this.innerHTML;
  iv.innerHTML = str;
}
}
)