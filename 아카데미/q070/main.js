//-------------------------------------------------------------
//                  Text-RPG v0.20.0 
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
    new Room ("연습장 입구","연습장 입구다.",1000,1001,0,0,0,0,0),
    new Room ("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0),
    new Room ("연습장 중앙","연습장 중앙이다.",1002,0,1001,1003,1004,1005,1006),
    new Room ("연습장 남쪽","연습장 남쪽이다.",1003,0,0,0,1002,0,0),
    new Room ("연습장 북쪽","연습장 북쪽이다.",1004,0,0,1002,0,0,0),
    new Room ("연습장 누각","연습장 누각이다.",1005,0,0,0,0,0,1002),
    new Room ("연습장 지하","연습장 지하이다.",1006,0,0,0,0,1002,0)
];

var monsterArray = [
    new Monster ("포링", 110, 110, 4, 15, 50, 1000),
    new Monster ("루나틱", 150, 150, 7, 20, 60, 1001),
    new Monster ("파브르", 130, 130, 5, 15, 50, 1002),
    new Monster ("푸파", 200, 200, 1, 25, 30, 1003),
    new Monster ("도둑벌레", 200, 200, 3, 40, 80, 1004),
    new Monster ("퍼밀리어", 190, 190, 15, 40, 75, 1005),
    new Monster ("포포링", 210, 210, 20, 50, 100, 1006)
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


