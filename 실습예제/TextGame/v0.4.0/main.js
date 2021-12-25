/*===============================*
|   TextGame v 0.4.0
*--------------------------------*
|   v0.1.0  클래스 생성
|   v0.1.0  각 클래스의 속성 출력
*--------------------------------*
|   v0.2.0 전투 시작 메세지 출력
|   v0.2.0 전투 처리 ( 한 턴만 실행 )
*--------------------------------*
|   v0.3.0  공격력 피해 수치를 랜덤으로 수정 ( 피해 수치는 공격력 수치와 0사이의 값이 랜덤으로 적용)
|   v0.3.0  공격 메세지 출력 ( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )
*--------------------------------*
|   1. 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
|   2. 케릭터 정보 표시를 수정하였습니다. ex. [엠피스(70/100)]
|   3. 케릭터 정보 표시에서 공격력 수치를 제거하였습니다.
=================================*/

// 플레이어 클래스 생성
function Player (name, hp, maxhp, attack,) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;

    this.info = function() {
        dw("[" + cha.name + "(" + cha.hp + "/" + cha.maxhp + ")]");
    }

}

// 플레이어 클랙스 속성 입력
var cha = new Player ("팔라딘", 150, 150, 50);

// 몬스터 클래스 생성
function Monster (name, hp, maxhp, attack,) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;

    this.info = function() {
        dw("[" + mon.name + "(" + mon.hp + "/" + mon.maxhp + ")]");
    }

}

// 몬스터 클랙스 속성 입력
var mon = new Monster ("고블린", 100, 100, 20);

cha.info();
mon.info();


br();
br();
hr();
dw("전투 시작!");
hr();

function randomattack(attack){	
	attack = attack + 1;
	var random = Math.floor(Math.random()*attack);
	return random;
}	

var crAttack = randomattack(cha.attack);
var mrAttack = randomattack(mon.attack);


cha.hp = cha.hp - mrAttack;
dw(cha.name + "이 " + mon.name + "에게 " + crAttack + " 데미지를 입혔습니다."); br();
mon.hp = mon.hp - crAttack;
dw(mon.name + "이 " + cha.name + "에게 " + mrAttack + " 데미지를 입혔습니다."); br();

br();
cha.info();
mon.info();
br();