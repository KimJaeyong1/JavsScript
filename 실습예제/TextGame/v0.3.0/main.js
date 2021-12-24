/*===============================*
|   TextGame v 0.3.0
*--------------------------------*
|   v0.1.0  클래스 생성
|   v0.1.0  각 클래스의 속성 출력
*--------------------------------*
|   v0.2.0 전투 시작 메세지 출력
|   v0.2.0 전투 처리 ( 한 턴만 실행 )
*--------------------------------*
|   1. 공격력 피해 수치를 랜덤으로 수정 ( 피해 수치는 공격력 수치와 0사이의 값이 랜덤으로 적용)
|   2. 공격 메세지 출력 ( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )
=================================*/

// 플레이어 클래스 생성
function Player(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    // 플레이어 속성 함수 호출
    this.info = function() {
        dw(cha.name + "( HP: " + cha.hp + " / 공격력: " + cha.attack +" )");
    }

}

// 플레이어 속성 입력
var cha = new Player("팔라딘", 150, 50);

// 몬스터 클래스 생성
function Monster(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    // 몬스터의 속성 함수 호출
    this.info = function() {
        dw(mon.name + "( HP: " + mon.hp + " / 공격력: " + mon.attack +" )");
    }


}

// 몬스터 속성 입력
var mon = new Monster("고블린", 100, 20);

// 각 클래스의 속성 출력
cha.info();
mon.info();
brbr();
brbr();

// 공격력 수치 랜덤
function randomAttack(attack) {
    attack = attack + 1;
    var random = Math.floor(Math.random() * attack); 
    return random;
}

var CRattack= randomAttack(cha.attack);
var MRattack= randomAttack(mon.attack);

// 전투 시작
hrhr();
dw("전투 시작!");
hrhr();
brbr();

// 전투 한턴
cha.hp = cha.hp - MRattack;
dw(mon.name + "이 " +cha.name+ " 에게" + MRattack + " 의 데미지를 입혔습니다")
hrhr();

mon.hp = mon.hp - CRattack;
dw(cha.name + "이 " +mon.name+ " 에게" + CRattack + " 의 데미지를 입혔습니다")
hrhr();
brbr();

// 전투 한턴 후 각 클래스 정보 출력
cha.info();
mon.info();
brbr();
brbr();