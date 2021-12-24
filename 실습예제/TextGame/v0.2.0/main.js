/*===============================*
|   TextGame v 0.2.0
*--------------------------------*
|   v0.1.0  클래스 생성
|   v0.1.0  각 클래스의 속성 출력
*--------------------------------*
|   1. 전투 시작 메세지 출력
|   1. 전투 처리 ( 한 턴만 실행 )
=================================*/

function Player (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw(cha.name + "( HP : " + cha.hp + " / 공격력 : " + cha.attack + " )");
    }

}

var cha = new Player ("팔라딘", 150, 50);

function Monster (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw(mon.name + "( HP : " + mon.hp + " / 공격력 : " + mon.attack + " )");
    }

}

var mon = new Monster ("고블린", 100, 20);

// 각 클래스 속성 출력
cha.info();
brbr();
mon.info();

// 전투시작 메세지 출력
hrhr();
dw("전투 시작!");
hrhr();

// 전투 한턴
cha.hp = cha.hp - mon.attack;
mon.hp = mon.hp - cha.attack;

// 전투 한턴 끝난 후 각 클래스 속성 출력
cha.info();
brbr();
mon.info();
