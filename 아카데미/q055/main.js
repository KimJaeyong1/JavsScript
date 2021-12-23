//-------------------------------------------------------------
//                  Text-RPG v6.0 
//-------------------------------------------------------------

function maininfo() {
    mon.info() + cha.info();
    br();
}

maininfo();
br();

hr();
dw("전투 시작");
hr();

var loop = true;
while(loop){
    loop = fight();
}

function fight() {
    var monAttack = getRandomAttackValue(mon.attack)
    var chaAttack = getRandomAttackValue(cha.attack)
    
    mon.hp = mon.hp - chaAttack; br();
    dw("엘프가 오크에게 데미지를 " + chaAttack + " 입혔습니다"); br();
    cha.hp = cha.hp - monAttack; br();
    dw("오크가 엘프에게 데미지를 " + monAttack + " 입혔습니다"); br();
    
    maininfo();

    if(cha.hp <= 0 || mon.hp <= 0){
        return false;
    } else {
        return true;
    }
}


function getRandomAttackValue(attack) {
        attack = attack + 1;
        var random = Math.floor(Math.random() * attack);
        return random;
    }




