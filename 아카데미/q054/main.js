//-------------------------------------------------------------
//                  Text-RPG v5.0 
//-------------------------------------------------------------


mon.info();
cha.info();
br();


dw("전투 시작");
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

dw("엘프가 오크에게 데미지를 " +chaAttack+ " 입혔습니다"); br();
dw("오크가 엘프에게 데미지를 " +monAttack+ " 입혔습니다"); br();

br();
mon.info();
cha.info();
br();
br();

function maininfo() {
    mon.info() + cha.info();
}

maininfo();

// if (mon.hp < 0) {
//     dw("엘프 승리!")
// } else if (cha.hp <0) {
//     dw("오크 승리!")
// }