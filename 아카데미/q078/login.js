const myID = "cat";
const myPassword = 1234;

var inputId;
var inputPw;
var inputLoginBt;
var inputSignBt;
var inputMa;

window.onload = function() {
    inputId = document.getElementById("loginId");
    inputPw = document.getElementById("loginPw");
    loginBt = document.getElementById("loginButton");
    signupBt = document.getElementById("singupButton");
    inputMa = document.getElementById("loginMain");

}

function login() {
    if(inputId.value == myID && inputPw.value == myPassword) {
        main();
    } if(inputId.value == myID && inputPw.value != myPassword) {
        alert("비밀번호가 틀렸습니다")
    } if(inputId.value != myID && inputPw.value == myPassword) {
        alert("아이디가 틀렸습니다.")
    } if(inputId.value != myID && inputPw.value != myPassword) {
    alert("로그인 실패")
    }
}

function main() {
    inputMa.innerHTML = inputId.value+"<p>회원님 반갑습니다.</p>";
}

function singup() {
    window.location.href = 'reg_member.html';
}
