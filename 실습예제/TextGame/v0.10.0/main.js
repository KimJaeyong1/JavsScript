/*===============================*
|   TextGame v 0.10.0
*--------------------------------*/

// 플레이어 몬스터 클래스 속성 입력
var cha = new Player ("팔라딘", 150, 150, 50, 0, 300, 0);
var mon = new Monster ("고블린", 100, 100, 20, 50, 100);

// 플레이어 몬스터 정보 출력
function totalinfo() {
	cha.info();
	mon.info();
	tv("\n");
	tv("\n");
}

// 데미지 랜덤 피해
function randomattack(attack){	
	attack = attack + 1;
	var random = Math.floor(Math.random()*attack);
	return random;
}	

function turnplay() {
	// 전투 한턴
	var crAttack = randomattack(cha.attack);
	var mrAttack = randomattack(mon.attack);
	
	cha.hp = cha.hp - mrAttack;
	tv(cha.name + "이 " + mon.name + "에게 " + crAttack + " 데미지를 입혔습니다.\n");
	mon.hp = mon.hp - crAttack;
	tv(mon.name + "이 " + cha.name + "에게 " + mrAttack + " 데미지를 입혔습니다.\n");
	tv("\n");
	
	if (cha.hp <= 0 || mon.hp <=0) {
		turnend();
		gold();
		cha.info();
		cha.money();
		return false;
	} else {
		return true;
	}
	
}

// 전투 종료
function turnend() {
	cha.exp = cha.exp + mon.exp;
	tv("전투 종료!\n");
	tv("\n");
	tv("패배자 " + mon.name + "은 " + cha.name + "에게 경험치 " + mon.exp + " 을 주고 사라졌습니다!\n");
	tv("\n");
}

// 골드 획득
function gold() {
	cha.gold = cha.gold + mon.gold;
	tv("전리품 " + mon.gold + "골드를 획득하였습니다\n")
}

window.onload = function() {
	screenMessageBox = document.getElementById("screen")
	screenPlayerBox = document.getElementById("screenPlayerInfo")
	
	tv("전투 시작!\n");
	tv("\n");
	
	// 전투 반복 처리
	var loof = true;
	while (loof) {
		loof = turnplay();
	}
}