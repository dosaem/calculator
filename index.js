var i = 0;
var ivArray = new Array();

function input_display(char) { 
  ivArray[i] = char;
  console.log[ivArray[i]];
  i++;
  var iv = document.getElementById("ivalue");
  iv.innerHTML = ivArray.join("");

  console.log(iv);  
}