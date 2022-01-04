
// 데미지 랜덤 피해
function randomattack(attack){	
    attack = attack + 1;
	var random = Math.floor(Math.random()*attack);
	return random;
}

// 전투 한턴
function turnplay() {
    var crAttack = randomattack(cha.attack);
	var mrAttack = randomattack(mon.attack);
	
	// 전투 메세지 출력
	cha.hp = cha.hp - mrAttack;
	tv(cha.name + "이 " + mon.name + "에게 " + crAttack + " 데미지를 입혔습니다.\n");
	mon.hp = mon.hp - crAttack;
	tv(mon.name + "이 " + cha.name + "에게 " + mrAttack + " 데미지를 입혔습니다.\n");
	tv("\n");
	
    
	if (cha.hp <= 0 || mon.hp <=0) {
        turnend();
		gold();
		totalinfo();
        scrollAuto();
		return false;
	} else {
		totalinfo();
        return true;
	}
	
}

function nonturnplay() {
	// textClean();
	tv("특별한 것은 보이지 않는다.\n");
}

// 전투 시작 버튼
function turn() {
    if (currentMode == "전투") {
        turnplay();
    } else {
        nonturnplay();
    }
		// if (cha.hp <= 0 || mon.hp <= 0) {
		// 	// btnDisabled();
		// 	var loof = false;
		// 	textClean();
		// } else {
		// 	tv("전투 시작!\n");
		// 	tv("\n");
			
		// 	// 전투 반복 처리
		// 	var loof = true;
		// 	while (loof) {
		// 		loof = turnplay();
		// 	}
		// }
}


// 전투 종료
function turnend() {
	cha.exp = cha.exp + mon.exp;
	tv("전투 종료!\n");
	tv("\n");
	tv("패배자 " + mon.name + "은 " + cha.name + "에게 경험치 " + mon.exp + " 을 주고 사라졌습니다!\n");
	tv("\n");
    currentMode = "대기";
}

// 플레이어 몬스터 정보 출력
function totalinfo() {
    mon.info();
    cha.info();
    tv("\n");
    tv("\n");
}

// 골드 획득
function gold() {
	cha.gold = cha.gold + mon.gold;
	tv("전리품 " + mon.gold + "골드를 획득하였습니다\n")
}


// 전투 시작 버튼 카운트 
function countBtn() {
	count ++;
	document.getElementById("playCount").value = count;
}
// 버튼 비활성화
// function btnDisabled()  {
// 	const target = document.getElementById('Playturn');
// 	target.disabled = true;
//   }

function textClean() {
	document.getElementById("screen").value = '';
}

function monsterClean() {
	document.getElementById("screenMonsterInfo").value = '';
}

// 스크롤
function scrollAuto() {
    var scrollBottom = document.getElementById("screen");
    scrollBottom.scrollTop = scrollBottom.scrollHeight;
}

// 이동 버튼
function moveEast(){	
	tv("동쪽으로 이동했습니다.");
	turn();
}

function moveWest(){	
	tv("서쪽으로 이동했습니다.");
	turn();
}	

function moveSouth(){	
	tv("남쪽으로 이동했습니다.");
	turn();
}	

function moveNorth(){	
	tv("북쪽으로 이동했습니다.");
	turn();
}	

function moveUp(){	
	tv("위쪽으로 이동했습니다.");
	turn();
}	

function moveDown(){	
	tv("밑쪽으로 이동했습니다.");
	turn();
}	