window.onload = function() {
  var cols = document.querySelectorAll('div.calculator-button > button'); 
 
[].forEach.call(cols ,function(col){
    col.addEventListener("click",click,false);
});
 
function click(e){
  document.getElementById("ivalue").innerHTML = this.innerHTML;
}
}