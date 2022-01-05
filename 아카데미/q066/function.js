// 플레이어 & 몬스터 정보 출력
function maininfo() {
    cha.info();
    mon.info();
    tv("\n");
}

// 골드 획득
function getReward() {
    cha.gold = cha.gold + mon.gold;
    tv(mon.gold + "원을 얻었습니다.\n");
    tv("\n");
}

// 턴 종료
function endBattle() {
    tv("전투 종료\n");
    tv("\n");
    cha.exp = cha.exp + mon.exp;
    tv("불쌍한 " + mon.name + ", " + cha.name + "에게 경험치 " + mon.exp + "을 주고 돌아갔습니다.\n");
    tv("\n");
    getReward();
    scroll();
    currentMode = "대기";
}

// 랜덤 데미지
function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}

// 전투 메세지 출력 & HP 확인
function procBattleTurn() {

    monAttack = getRandomAttackValue(mon.attack);
    chaAttack = getRandomAttackValue(cha.attack);
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

// 버튼 클릭 시 턴 진행
function turn() {
    if (currentMode == "전투") {
        console.log("로그찍기");
        procBattleTurn();
    } else {
        procNormalTurn();
        console.log("대기");
    }
    
    turnCount ++;
    BoxCount.value = turnCount;
}

// 전투 종료 후 상태
function procNormalTurn() {
    tv("특별한 것은 보이지 않는다.\n");
}

// 메세지 박스 지우기
function tvClean() {
    screenMessageBox.value = "";
}

// 메세지 박스 스크롤
function scroll() {
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}

// 몬스터 메세지 박스 지우기
function tvMonsterClean() {
    screenMonsterInfo.value = "";
}

// 이동 버튼
function moveEast() {
    tv("동쪽으로 이동 했습니다.\n")
    turn();
}
function moveWest() {
    tv("서쪽으로 이동 했습니다.\n")
    turn();
}
function moveSouth() {
    tv("남쪽으로 이동 했습니다.\n")
    turn();
}
function moveNorth() {
    tv("북쪽으로 이동 했습니다.\n")
    turn();
}
function moveUp() {
    tv("위로 이동 했습니다.\n")
    turn();
}
function moveDown() {
    tv("밑으로 이동 했습니다.\n")
    turn();
}

function returnInfo() {
    for (i=0; i < roomArr.length; i++) {
        roomArr[i] == roomId;
        return roomArr[i];
    }
}

function displayRoomInfo(){
    returnInfo().displayRoomInfo();
}
