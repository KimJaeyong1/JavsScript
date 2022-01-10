var catLink;
var btnLink;
var openImage = true;

window.onload = function() {
    catLink = document.getElementById("image_cat");
    btnLink = document.getElementById("cat_button");
    btnLink.addEventListener("click",button);
}

function button() {
    if(openImage) {
        catLink.style.display = "inline";
        console.log("고양이 오픈")
        openImage = false;
    } else {
        catLink.style.display = "none";
        console.log("고양이 클로즈")
        openImage = true;
    }
}

