//-------------------------------------------------------------
//                  Text-RPG v7.0 
//-------------------------------------------------------------

// window.onload = function() {
//     onclick.fight();
// }


function maininfo() {
    mon.info()+ cha.info();
    br();
}

function move () {
    mon.hp = mon.maxhp + 10;
    dw("다음층으로 이동합니다.")
}

function rest () {
    mon.hp = mon.maxhp + 10;
    cha.hp = cha.hp + 100;
    dw("휴식으로 인해 생명력이 100 회복 되었습니다.")
}
maininfo();
br();


function fight() {
        dw("*------------------------- 전투 시작 -------------------------*");

    while (true) {
        function getRandomAttackValue(attack) {
            attack = attack + 1;
            var random = Math.floor(Math.random() * attack);
            return random;
        }

        var monAttack = getRandomAttackValue(mon.attack)
        var chaAttack = getRandomAttackValue(cha.attack)
        
        
        mon.hp = mon.hp - chaAttack; br();
        cha.hp = cha.hp - monAttack; br();
        
        dw("엘프가 오크에게 데미지를 " + chaAttack + " 입혔습니다"); br();
        dw("오크가 엘프에게 데미지를 " + monAttack + " 입혔습니다"); br();
        
        br();
        maininfo();
        br();
        br();
        
        var expadd = cha.exp + mon.exp;
        var expminus = cha.exp - mon.exp;
        
        if (mon.hp <= 0) {
            dw("전투 종료! 엘프 승리! - 경험치 "+expadd+" 획득! 전리품 "+mon.gold+" 골드 획득!");
            br();
            cha.exp = cha.exp + mon.exp;
            cha.gold = cha.gold + mon.gold;
            mon.hp = 0;
            cha.info(); br();
            break;
        } else if (cha.hp <= 0) {
            dw("전투 종료! 오크 승리! - 경험치 "+expminus+" 감소! 전리품 "+mon.gold+" 골드 감소!");
            br();
            cha.exp = cha.exp - mon.exp;
            cha.gold = cha.gold - mon.gold;
            cha.info(); br();
            break;
        }
    }
}

