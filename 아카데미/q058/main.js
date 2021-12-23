//-------------------------------------------------------------
//                  Text-RPG v7.0 
//-------------------------------------------------------------

function maininfo() {
    cha.info();
    mon.info();
    dw("\n");
}

function getReward() {
    cha.gold = cha.gold + mon.gold;
    dw(mon.gold + "원을 얻었습니다.\n");
}

function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}


function endBattle() {
    dw("전투 종료\n");
    cha.exp = cha.exp + mon.exp;
    dw("불쌍한 " + mon.name + ", " + cha.name + "에게 경험치 " + mon.exp + "을 주고 죽었습니다.\n");
    getReward();
}

function fight() {
    
    var monAttack = getRandomAttackValue(mon.attack)
    var chaAttack = getRandomAttackValue(cha.attack)
    
    mon.hp = mon.hp - chaAttack; 
    dw("엘프가 오크에게 데미지를 " + chaAttack + " 입혔습니다");
    cha.hp = cha.hp - monAttack; 
    dw("오크가 엘프에게 데미지를 " + monAttack + " 입혔습니다");
    
    if (cha.hp <= 0 || mon.hp <= 0) {
        return false;
    } else {
        return true;
    }
}

var screen;
var mon = new Monster ("오크", 200, 200, 50, 50, 100);
var cha = new Character ("엘프", 300, 300, 80, 10, 300, 10);

window.onload = function () {
    screen = document.getElementById("screen");
    
    maininfo();
    
    dw("*--------- 전투 시작 ----------*");
    
    var loop = true;
    while (loop) {
        loop = fight();
    }
}