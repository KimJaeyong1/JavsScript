var inputId;
var inputPw;
var inputBt;

window.onload = function() {
    inputId = document.getElementById("loginId");
    inputPw = document.getElementById("loginPw");
    inputBt = document.getElementById("loginBt");

}

function loginBtn() {
    alert(inputId.value +" / "+inputPw.value);
}