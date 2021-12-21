dw("<div id='box'> </div>");

dw("<img id='cat' src='cat.jpg'>");

var catImage = document.getElementById("cat");
catImage.style.display = "none";

var box = document.getElementById("box");

box.innerHTML="<img src='cat.jpg'>";