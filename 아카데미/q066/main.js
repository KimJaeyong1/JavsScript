//-------------------------------------------------------------
//                  Text-RPG v0.17.0 
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
var roomId = 1000;
var roomA = new Room ("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);
var roomB = new Room ("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
var roomC = new Room ("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);

// 배열에 방 객체를 넣음 
var roomArr = [
    new Room ("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0),
    new Room ("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0),
    new Room ("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0)
];

window.onload = function () {
    screenMessageBox = document.getElementById("screenMain");
    screenPlayerInfo = document.getElementById("screenPlayer");
    screenMonsterInfo = document.getElementById("screenMonster");
    TurnPlay = document.getElementById("playTurn")
    BoxCount = document.getElementById("countBox")
    
    maininfo();
    
    displayRoomInfo();

}


