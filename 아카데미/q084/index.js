var catLink;
var btnLink;
var openImage = true;

window.onload = function() {
    catLink = document.getElementById("image_cat");
    btnLink = document.getElementById("cat_button");
    btnLink.addEventListener("click",button);
}

function button() {
    catLink.style.display = "inline";
}

