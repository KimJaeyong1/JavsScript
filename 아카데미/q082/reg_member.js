var getId;
var getPw;
var confirmPw;
var getBirth;
var getMonth;
var getDay;
var getName;
var getMail;
var mailDomain;
var choiceDomain;
var genderChoice;
var getfirstNumber;
var getmiddleNumber;
var getlastNumber;
var gender;

window.onload = function() {
    getId = document.getElementById("input_id");
    getPw = document.getElementById("input_pw");
    confirmPw = document.getElementById("input_pw_confirm");
    getBirth = document.getElementById("birth");
    getMonth = document.getElementById("month");
    getDay = document.getElementById("day");
    getName = document.getElementById("input_name");
    getMail = document.getElementById("input_mail");
    mailDomain = document.getElementById("mail_domain");
    choiceDomain = document.getElementById("domain_choice");
    genderChoice = document.getElementsByName("sex");
    getfirstNumber = document.getElementById("input_number_first");
    getmiddleNumber = document.getElementById("input_number_middle");
    getlastNumber = document.getElementById("input_number_last");
}

function lengthConfirm() {
    getGender();
    if(
        idConfirm() &&
        pwConfirm() &&
        pwReconfirm() &&
        birthConfirm() &&
        nameConfirm() &&
        mailStringCheak() &&
        mailConfirm() &&
        firstNumberConfirm() &&
        middleNumberConfirm() &&
        lastNumberConfirm()
    )
    {
        userInfo();
        alert("회원가입에 성공하였습니다.\n");
    }
}

function userInfo() {
    alert(
        "입력한 정보\n\n"
        +"아이디: "+getId.value+"\n"
        +"생년월일: "+getBirth.value+"."+getMonth.value+"."+getDay.value+"\n"
        +"이름: "+getName.value+"\n"
        +"이메일: "+getMail.value+mailDomain.value+"\n"
        +"성별: "+gender+"\n"
        +"전화번호: "+getfirstNumber.value+"-"+getmiddleNumber.value+"-"+getlastNumber.value
        );
}


function idConfirm() {
    if(getId.value.length < 4 || getId.value.length > 10) {
        alert("아이디는 4자 이상 10자 이하입니다.")
        getId.value = "";
        return false;
    } else {
        console.log("아이디 확인");
        return true;
    }
}

function pwConfirm() {
    if(getPw.value.length < 4 || getPw.value.length > 10) {
        alert("비밀번호는 4자 이상 10자 이하입니다.")
        getPw.value = "";
        return false;
    } else {
        console.log("비밀번호 확인");
        return true;
    }
}

function pwReconfirm() {
    if(getPw.value.length < 4 || getPw.value.length > 10) {
        alert("비밀번호를 먼저 입력하세요.")
    } else if (getPw.value == confirmPw.value) {
        console.log("비밀번호 같은지 확인");
        return true;
    } else {
        alert("비밀번호가 같지 않습니다.")
        getPw.value = "";
        confirmPw.value = "";
        return false;
    }
}

function birthConfirm() {
    if(getBirth.value.length < 4 || getBirth.value.length > 4) {
        alert("생년은 4자리만 숫자만 입력 가능합니다.")
        getBirth.value = "";
        return false;
    } else {
        console.log("생년 확인");
        return true;
    }
}

function nameConfirm() {
    if(getName.value.length < 2 || getName.value.length > 10) {
        alert("이름은 2자 이상 10자 이하입니다.")
        getName.value = "";
        return false;
    } else {
        console.log("이름 확인");
        return true;
    }
}

function mailStringCheak() {
    var findString = "@";
    if(mailDomain.value.indexOf(findString) != -1) {
        console.log("메일 형식 확인");
        return true;
    } else {
        alert("메일 형식으로 적어주세요!");
        return false;
    }
}

function mailConfirm() {
    if(getMail.value.length < 4 || getMail.value.length > 15) {
        alert("메일주소는 4자 이상 15자 이하입니다.")
        getMail.value = "";
        return false;
    } else {
        console.log("메일 확인");
        return true;
    }
}

function getGender() {
    for(var i=0; i<genderChoice.length; i++) {
        if(genderChoice[i].checked == true) {
            gender = genderChoice[i].value;
            console.log("성별 확인"+gender);
        }
    }
}

function firstNumberConfirm() {
    if(getfirstNumber.value.length < 2 || getfirstNumber.value.length > 3) {
        alert("전화번호 앞자리는 2~3자리 숫자만 입력 가능합니다.")
        getfirstNumber.value = "";
        return false;
    } else {
        console.log("전화번호 앞자리 확인");
        return true;
    }
}

function middleNumberConfirm() {
    if(getmiddleNumber.value.length < 4 || getmiddleNumber.value.length > 4) {
        alert("전화번호 중간자리는 4자리 숫자만 입력 가능합니다.")
        getmiddleNumber.value = "";
        return false;
    } else {
        console.log("전화번호 중간자리 확인");
        return true;
    }
}

function lastNumberConfirm() {
    if(getlastNumber.value.length < 4 || getlastNumber.value.length > 4) {
        alert("전화번호 뒷자리는 4자리 숫자만 입력 가능합니다.")
        getlastNumber.value = "";
        return false;
    } else {
        console.log("전화번호 뒷자리 확인");
        return true;
    }
}

function putinMail() {
    var selValue = document.getElementById("domain_choice");
    var selText = document.getElementById("mail_domain");
    selText.value = selValue.options[selValue.selectedIndex].value;

}
