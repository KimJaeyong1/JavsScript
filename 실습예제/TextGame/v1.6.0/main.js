/*===============================*
|   TextGame v 1.6.0
*--------------------------------*/

// 플레이어 몬스터 클래스 속성 입력
var cha = new Player ("팔라딘", 150, 150, 50, 0, 300, 0);
var mon = new Monster ("고블린", 100, 100, 20, 50, 100);
var currentMode = "대기";
var screenMessageBox;
var screenPlayerBox;
var screenMonsterBox;
var count = 1;
var roomA = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);
var roomB = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
var roomC = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);

window.onload = function() {
	// 출력 관련
	screenMessageBox = document.getElementById("screen");
	screenPlayerBox = document.getElementById("screenPlayerInfo");
	screenMonsterBox = document.getElementById("screenMonsterInfo");
	
	// 전투 시작 버튼 관련
	document.getElementById("Playturn").addEventListener('click',turn);
	
	// totalinfo();
	totalinfo();

	// tv("전투 시작!\n");
	// tv("\n");

	roomA.displayRoomInfo(); 

}
