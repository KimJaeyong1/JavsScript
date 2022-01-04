//-------------------------------------------------------------
//                  Text-RPG v0.12.0 
//-------------------------------------------------------------

function maininfo() {
    cha.info();
    mon.info();
    tv("\n");
}

function getReward() {
    cha.gold = cha.gold + mon.gold;
    tv(mon.gold + "원을 얻었습니다.\n");
    tv("\n");
}

function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}


function endBattle() {
    tv("전투 종료\n");
    tv("\n");
    cha.exp = cha.exp + mon.exp;
    tv("불쌍한 " + mon.name + ", " + cha.name + "에게 경험치 " + mon.exp + "을 주고 돌아갔습니다.\n");
    tv("\n");
    getReward();
}

function fight() {
    
    var monAttack = getRandomAttackValue(mon.attack)
    var chaAttack = getRandomAttackValue(cha.attack)
    
    mon.hp = mon.hp - chaAttack; 
    tv("엘프가 오크에게 데미지를 " + chaAttack + " 입혔습니다\n");
    cha.hp = cha.hp - monAttack; 
    tv("오크가 엘프에게 데미지를 " + monAttack + " 입혔습니다\n");
    tv("\n");
    
    if (cha.hp <= 0 || mon.hp <= 0) {
        endBattle();
        maininfo();
        return false;
    } else {
        maininfo();
        return true;
    }
}

var screenMessageBox;
var mon = new Monster ("오크", 200, 200, 45, 50, 100);
var cha = new Character ("엘프", 300, 300, 60, 0, 300, 0);
var TurnPlay;
var BoxCount;
var count = 0;

function turn() {
    console.log("로그찍기");
    fight();
    
    count ++;
    BoxCount.value = count;
}

window.onload = function () {
    screenMessageBox = document.getElementById("screenMain");
    screenPlayerInfo = document.getElementById("screenPlayer");
    screenMonsterInfo = document.getElementById("screenMonster");
    TurnPlay = document.getElementById("playTurn")
    BoxCount = document.getElementById("countBox")
    
    maininfo();
    
    tv("*--------- 전투 시작 ----------*\n");
    tv("\n");
    
}


