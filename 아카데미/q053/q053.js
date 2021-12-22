//------------------------------------------------------
//    Text-RPG v3.0
//------------------------------------------------------
//- 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
//- 케릭터 정보 표시를 수정하였습니다. ex. [엠피스(70/100)]
//- 케릭터 정보 표시에서 공격력 수치를 제거하였습니다.
//-------------------------------------------------------

function Monster (name, maxhp, hp, attack) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw("["+mon.name+"("+mon.hp+"/"+mon.maxhp+")]"); hr();
        br();
    }
}

var mon = new Monster("오크", 200, 200, 50);


function Character (name, maxhp, hp, attack) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    
    this.info = function() {
        dw("["+cha.name+"("+cha.hp+"/"+cha.maxhp+")]"); hr();
        br();
    }
}

var cha = new Character("엘프", 250, 250, 80);

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



// if (mon.hp < 0) {
//     dw("엘프 승리!")
// } else if (cha.hp <0) {
//     dw("오크 승리!")
// }