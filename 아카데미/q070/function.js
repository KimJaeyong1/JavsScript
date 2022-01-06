// 플레이어 & 몬스터 정보 출력
function maininfo() {
    cha.info();
    // mon.info();
    tv("\n");
}

// 골드 획득
function getReward() {
    cha.gold = cha.gold + mon.gold;
    tv(mon.gold + "원을 얻었습니다.\n");
    tv("\n");
}

// 랜덤 데미지
function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}

// 턴 종료
function endBattle() {
    tv("전투 종료\n");
    tv("\n");
    cha.exp = cha.exp + mon.exp;
    tv("불쌍한 " + mon.name + ", " + cha.name + "에게 경험치 " + mon.exp + "을 주고 돌아갔습니다.\n");
    tv("\n");
    getReward();
    currentMode = "대기";
    tvMonsterinfoClear();
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
        maininfo();
        endBattle();
        return false;
    } else {
        maininfo();
        return true;
    }
}

// 버튼 클릭 시 턴 진행
function turn() {
    if (currentMode == "전투") {
        procBattleTurn();
    } else {
        procNormalTurn();
    }
    
    turnCount ++;
    BoxCount.value = turnCount;
    console.log("현재 턴:" + turnCount);
}

// 전투 종료 후 상태
function procNormalTurn() {
    tv("특별한 것은 보이지 않는다.\n");
}

// 메세지 박스 스크롤
function screenMessageBoxScrollToBot() {
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}

function move(direction) {
    var nowRoom = returnInfo();
    var connectionRoomid = nowRoom.getIdByDirection(direction);
    if (connectionRoomid == 0) {
        tv("이동 할 수 없습니다\n");
        return;
    } else {
        roomId = connectionRoomid;
        console.log("현재 방ID는 " + roomId);
    }
        
    switch (direction) {
        case "동" :
            tv("동쪽으로 이동 했습니다\n");
            tv("\n");
            break;
            
        case "서" :
            tv("서쪽으로 이동 했습니다\n");
            tv("\n");
            break;
            
        case "남" :
            tv("남쪽으로 이동 했습니다\n");
            tv("\n");
            break;

        case "북" :
            tv("북쪽으로 이동 했습니다\n");
            tv("\n");
            break;

        case "위" :
            tv("위로 이동 했습니다\n");
            tv("\n");
            break;

        case "밑" :
            tv("밑으로 이동 했습니다\n");
            tv("\n");
            break;
    }
    displayRoomInfo();
    tv("\n");
    turn();
}

function returnInfo() {
    for (var i=0; i < roomArr.length; i++) {
        if(roomArr[i].id == roomId) {
            return roomArr[i];
        }
    }
}

function displayRoomInfo(){
    returnInfo().displayRoomInfo();
    displayCurrentRoomMonstersInfo();
}

function displayCurrentRoomMonstersInfo() {
    var currentRoomMonstersArray = getCurrentRoomMonsters();
    var monstersString = "";
    for (var i=0; i<currentRoomMonstersArray.length; i++) {
        console.log(currentRoomMonstersArray[i].name)
        monstersString = monstersString + currentRoomMonstersArray[i].getInfo();
    }
    tvMonsterinfo(monstersString);
}

function getCurrentRoomMonsters () {
    var currentRoomMonsters = new Array();
    for (var i=0; i<monsterArray.length; i++) {
        if (monsterArray[i].location == roomId) {
            currentRoomMonsters.push(monsterArray[i]);
        }
    }
    return currentRoomMonsters;
}