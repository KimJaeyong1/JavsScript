/*===============================*
|   TextGame v 0.5.0
*--------------------------------*/

// 플레이어 몬스터 클래스 속성 입력
var cha = new Player ("팔라딘", 150, 150, 50);
var mon = new Monster ("고블린", 100, 100, 20);

// 플레이어 몬스터 정보 출력
function totalinfo() {
    cha.info() + mon.info();
}

totalinfo();

// 전투 시작
br();
br();
hr();
dw("전투 시작!");
hr();

// 데미지 랜덤 피해
function randomattack(attack){	
	attack = attack + 1;
	var random = Math.floor(Math.random()*attack);
	return random;
}	

var crAttack = randomattack(cha.attack);
var mrAttack = randomattack(mon.attack);

// 전투 한턴
cha.hp = cha.hp - mrAttack;
dw(cha.name + "이 " + mon.name + "에게 " + crAttack + " 데미지를 입혔습니다."); br();
mon.hp = mon.hp - crAttack;
dw(mon.name + "이 " + cha.name + "에게 " + mrAttack + " 데미지를 입혔습니다."); br();

// 전투 후 플레이어 몬스터 정보 출력
br();
cha.info();
mon.info();
br();