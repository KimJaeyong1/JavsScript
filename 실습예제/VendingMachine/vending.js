///////////////////////////
//  VendingMachine v1.0  //
///////////////////////////


// 잔액

var coin = 0;
document.getElementById("balance").innerHTML = coin + "원";




// 음료수 구입
function click_water() {
    if (coin >= 500) {
        coin = coin -= 500;
        alert("물을 구입 하셨습니다")
    } else {
        alert("잔액이 부족합니다")
    }
    document.getElementById("balance").innerHTML = coin + "원";
}

function click_coffie() {
    if (coin >= 700) {
        coin = coin -= 700;
        alert("커피를 구입 하셨습니다")
    } else {
        alert("잔액이 부족합니다")
    }
    document.getElementById("balance").innerHTML = coin + "원";
}

function click_coke() {
    if (coin >= 1200) {
        coin = coin -= 1200;
        alert("콜라를 구입 하셨습니다")
    } else {
        alert("잔액이 부족합니다")
    }
    document.getElementById("balance").innerHTML = coin + "원";
}

function click_pocari() {
    if (coin >= 1100) {
        coin = coin -= 1100;
        alert("포카리스웨트를 구입 하셨습니다")
    } else {
        alert("잔액이 부족합니다")
    }
    document.getElementById("balance").innerHTML = coin + "원";
}

function click_vita() {
    if (coin >= 900) {
        coin = coin -= 900;
        alert("Vita 500을 구입 하셨습니다")
    } else {
        alert("잔액이 부족합니다")
    }
    document.getElementById("balance").innerHTML = coin + "원";
}

function click_monster() {
    if (coin >= 2000) {
        coin = coin -= 2000;
        alert("몬스터 에너지 울트라를 구입 하셨습니다")
    } else {
        alert("잔액이 부족합니다")
    }
    document.getElementById("balance").innerHTML = coin + "원";
}

const clickChoice1 = document.getElementById("water");
water.addEventListener("click", click_water);

const clickChoice2 = document.getElementById("coffie");
coffie.addEventListener("click", click_coffie);

const clickChoice3 = document.getElementById("coke");
coke.addEventListener("click", click_coke);

const clickChoice4 = document.getElementById("prcari");
pocari.addEventListener("click", click_pocari);

const clickChoice5 = document.getElementById("vita");
vita.addEventListener("click", click_vita);

const clickChoice6 = document.getElementById("monster");
monster.addEventListener("click", click_monster);

// 잔액 충전
function Charge100() {
    coin = coin += 100;
    document.getElementById("balance").innerHTML = coin + "원";
}

function Charge500() {
    coin = coin += 500;
    document.getElementById("balance").innerHTML = coin + "원";
}

function Charge1000() {
    coin = coin += 1000;
    document.getElementById("balance").innerHTML = coin + "원";
}

const clickCharge1 = document.getElementById("charge_btn1");
charge_btn1.addEventListener("click", Charge100);

const clickCharge2 = document.getElementById("charge_btn2");
charge_btn2.addEventListener("click", Charge500);

const clickCharge3 = document.getElementById("charge_btn2");
charge_btn3.addEventListener("click", Charge1000);


