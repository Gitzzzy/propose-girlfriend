//alert Items 
alert("Your own text #1");
alert("Your own text #2");
alert("Your own text #3"); // You can add more alert if you want

//innerHTML
var text = document.getElementById("text");
var button = document.getElementById("button");

button.addEventListener('click', function() {
  text.innerHTML = "Lmfao";
});
