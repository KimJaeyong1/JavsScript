var getId;
var getPw;
var confirmPw;
var getBirth;
var getName;
var getMail;
var getfirstNumber;
var getmiddleNumber;
var getlastNumber;

window.onload = function() {
    getId = document.getElementById("input_id");
    getPw = document.getElementById("input_pw");
    confirmPw = document.getElementById("input_pw_confirm");
    getBirth = document.getElementById("birth");
    getName = document.getElementById("input_name");
    getMail = document.getElementById("input_mail");
    getfirstNumber = document.getElementById("input_number_first");
    getmiddleNumber = document.getElementById("input_number_middle");
    getlastNumber = document.getElementById("input_number_last");
}

function lengthConfirm() {
    idConfirm();
    pwConfirm();
    pwReconfirm();
    birthConfirm();
    nameConfirm();
    mailConfirm();
    firstNumberConfirm();
    middleNumberConfirm();
    lastNumberConfirm();
}

function idConfirm() {
    if(getId.value.length < 4 || getId.value.length > 10) {
        alert("아이디는 4자 이상 10자 이하입니다.")
        getId.value = "";
    }
}

function pwConfirm() {
    if(getPw.value.length < 4 || getPw.value.length > 10) {
        alert("비밀번호는 4자 이상 10자 이하입니다.")
        getPw.value = "";
    }
}

function pwReconfirm() {
    if(getPw.value != confirmPw.value) {
        alert("비밀번호가 같지 않습니다.")
        getPw.value = "";
        confirmPw.value = "";
    }
}

function birthConfirm() {
    if(getBirth.value.length < 4 || getBirth.value.length > 4) {
        alert("생년은 4자리만 숫자만 입력 가능합니다.")
        getBirth.value = "";
    }
}

function nameConfirm() {
    if(getName.value.length < 2 || getName.value.length > 10) {
        alert("이름은 2자 이상 10자 이하입니다.")
        getName.value = "";
    }
}


function mailConfirm() {
    if(getMail.value.length < 10 || getMail.value.length > 20) {
        alert("메일주소는 10자 이상 20자 이하입니다.")
        getMail.value = "";
    }
}

function firstNumberConfirm() {
    if(getfirstNumber.value.length < 2 || getfirstNumber.value.length > 3) {
        alert("전화번호 앞자리는 2~3자리 숫자만 입력 가능합니다.")
        getfirstNumber.value = "";
    }
}

function middleNumberConfirm() {
    if(getmiddleNumber.value.length < 4 || getmiddleNumber.value.length > 4) {
        alert("전화번호 중간자리는 4자리 숫자만 입력 가능합니다.")
        getmiddleNumber.value = "";
    }
}

function lastNumberConfirm() {
    if(getlastNumber.value.length < 4 || getlastNumber.value.length > 4) {
        alert("전화번호 뒷자리는 4자리 숫자만 입력 가능합니다.")
        getlastNumber.value = "";
    }
}