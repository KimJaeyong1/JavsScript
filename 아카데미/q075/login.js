var inputId;
var inputPw;
var inputBt;

window.onload = function() {
    inputId = document.getElementById("loginId");
    inputPw = document.getElementById("loginPw");
    inputBt = document.getElementById("loginBt");

}

function loginBtn() {
    if(inputId.value == "cat" && inputPw.value == 1234) {
        alert("로그인 성공")
    } if(inputId.value == "cat" && inputPw.value != 1234) {
        alert("비밀번호가 틀렸습니다")
    } if(inputId.value != "cat" && inputPw.value == 1234) {
        alert("아이디가 틀렸습니다.")
    } if(inputId.value != "cat" && inputPw.value != 1234) {
    alert("로그인 실패")
    }
}