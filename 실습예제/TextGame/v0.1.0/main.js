/*============================*
|   TextGame v 0.1.0
*-----------------------------*
|   1. 클래스 생성
|   2. 각 클래스의 속성 출력
==============================*/


// 플레이어 클래스 속성
function Player (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    
    this.info = function() {
        dw(cha.name + " ( HP : " + cha.hp + " / 공격력 : " + cha.attack + " )");
    }
    
}

var cha = new Player ("팔라딘", 150, 50);


// 몬스터 클래스 속성
function Monster (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw(mon.name + " ( HP : " + mon.hp + " / 공격력 : " + mon.attack + " )");
    }

}

var mon = new Monster ("고블린", 100, 20);

// 각 클래스 속성 호출
cha.info();
brbr();
mon.info();