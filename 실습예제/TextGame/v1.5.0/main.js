/*===============================*
|   TextGame v 1.5.0
*--------------------------------*/

// 플레이어 몬스터 클래스 속성 입력
var cha = new Player ("팔라딘", 150, 150, 50, 0, 300, 0);
var mon = new Monster ("고블린", 100, 100, 20, 50, 100);
var currentMode = "대기";
var screenMessageBox;
var screenPlayerBox;
var screenMonsterBox;
var count = 0;

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

}
