var inputId;
var inputPw;
var inputBt;
var inputMa;

window.onload = function() {
    inputId = document.getElementById("loginId");
    inputPw = document.getElementById("loginPw");
    inputBt = document.getElementById("loginBt");
    inputMa = document.getElementById("loginMain");

}

function loginBtn() {
    if(inputId.value == "cat" && inputPw.value == 1234) {
        // alert("로그인 성공")
        main();
    } if(inputId.value == "cat" && inputPw.value != 1234) {
        alert("비밀번호가 틀렸습니다")
    } if(inputId.value != "cat" && inputPw.value == 1234) {
        alert("아이디가 틀렸습니다.")
    } if(inputId.value != "cat" && inputPw.value != 1234) {
    alert("로그인 실패")
    }
}

function main() {
    inputMa.innerHTML = inputId.value+"<p>회원님 반갑습니다.</p>";
}