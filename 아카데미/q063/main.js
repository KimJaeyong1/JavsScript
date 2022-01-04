//-------------------------------------------------------------
//                  Text-RPG v0.14.0 
//-------------------------------------------------------------

var mon = new Monster ("오크", 200, 200, 45, 50, 100);
var cha = new Character ("엘프", 300, 300, 60, 0, 300, 0);
var monAttack = getRandomAttackValue(mon.attack)
var chaAttack = getRandomAttackValue(cha.attack)
var screenMonsterInfo;
var screenMessageBox;
var screenPlayerInfo;
var TurnPlay;
var BoxCount;
var count = 0;
var currentMode = "전투";

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


