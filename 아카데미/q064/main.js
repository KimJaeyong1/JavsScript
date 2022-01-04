//-------------------------------------------------------------
//                  Text-RPG v0.14.0 
//-------------------------------------------------------------

var mon = new Monster ("오크", 200, 200, 45, 50, 100);
var cha = new Character ("엘프", 300, 300, 60, 0, 300, 0);
var monAttack = 0;
var chaAttack = 0;
var screenMonsterInfo;
var screenMessageBox;
var screenPlayerInfo;
var TurnPlay;
var BoxCount;
var turnCount = 1;
var currentMode = "대기";

window.onload = function () {
    screenMessageBox = document.getElementById("screenMain");
    screenPlayerInfo = document.getElementById("screenPlayer");
    screenMonsterInfo = document.getElementById("screenMonster");
    TurnPlay = document.getElementById("playTurn")
    BoxCount = document.getElementById("countBox")
    
    maininfo();
    
}


