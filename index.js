window.onload = function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
[].forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});


var str2 = "";
function click(e){
  var str = this.innerHTML;
  str2 = str2.concat(str);
  document.getElementById("ivalue").innerHTML = str2;
}
}