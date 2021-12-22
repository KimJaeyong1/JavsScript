//------------------------------------------------------------------------
//                  Text-RPG v3.0
//------------------------------------------------------------------------
//- 공격력을 해당 공격력 수치와 0사이의 값이 랜덤으로 나오도록 수정하였습니다.
//- 공격 메세지 출력 추가( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )
//-------------------------------------------------------------------------


function Monster (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw(mon.name+ " / HP : "+mon.hp+ " / 공격력 : "+mon.attack); hr();
        br();
    }
}

var mon = new Monster("오크", 200, 50);


function Character (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    
    this.info = function() {
        dw(cha.name+ " / HP : "+cha.hp+ " / 공격력 : "+cha.attack); hr();
        br();
    }
}

var cha = new Character("엘프", 250, 80);

mon.info();
cha.info();
br();


dw("1라운드 시작");
br();

function getRandomAttackValue(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
    }

var monAttack = getRandomAttackValue(mon.attack)
var chaAttack = getRandomAttackValue(cha.attack)

mon.hp = mon.hp - chaAttack; br();
cha.hp = cha.hp - monAttack; br();

dw("엘프가 오크에게 데미지를" +chaAttack+ "입혔습니다"); br();
dw("오크가 엘프에게 데미지를" +monAttack+ "입혔습니다"); br();

br();
mon.info();
cha.info();
br();
br();

// dw("2라운드 시작");
// br();
// br();
// mon.hp = mon.hp - getRandomAttackValue(cha.attack);
// cha.hp = cha.hp - getRandomAttackValue(mon.attack);
// mon.info();
// cha.info();
// br();
// br();

// dw("3라운드 시작");
// br();
// br();
// mon.hp = mon.hp - getRandomAttackValue(cha.attack);
// cha.hp = cha.hp - getRandomAttackValue(mon.attack);
// mon.info();
// cha.info();
// br();
// br();

// if (mon.hp < 0) {
//     dw("엘프 승리!")
// } else if (cha.hp <0) {
//     dw("오크 승리!")
// }