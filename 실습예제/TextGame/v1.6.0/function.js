
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

/*
    roomName 방이름
    desc 방설명
    id 방 고유 id ex.1000 1001 ...
    e 동쪽 방의 고유 id (0이면 동쪽으로 연결이 안된 방, 특정id값이면 해당id방과 연결되었다는 뜻)
    w 서 //
    s 남 //
    n 북 //
    u 위 //
    d 밑 //
*/
function Room(roomName,desc,id,e,w,s,n,u,d){
    this.roomName = roomName;
    this.desc = desc;
    this.id = id;
    this.e = e;
    this.w = w;
    this.s = s;
    this.n = n;
    this.u = u;
    this.d = d;

    this.displayRoomInfo = function(){
        tv("["+this.roomName+"]\n");
        tv(this.desc+"\n");
        tv(this.getRoomEnter()+"\n");
    }

    this.getRoomEnter = function(){
        var enters = "출구:[";
        if(e != 0){
            enters = enters + " 동";
        }
        if(w != 0){
            enters = enters + " 서";
        }
        if(s != 0){
            enters = enters + " 남";
        }
        if(n != 0){
            enters = enters + " 북";
        }
        if(u != 0){
            enters = enters + " 위";
        }
        if(d != 0){
            enters = enters + " 밑";
        }
        enters = enters + " ]";
        return enters;
    }
}