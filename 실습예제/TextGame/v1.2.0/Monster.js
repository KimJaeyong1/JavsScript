// 몬스터 클래스 생성
function Monster (name, hp, maxhp, attack, exp, gold) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.gold = gold;

    this.info = function() {
        mtv("[" + mon.name + "(" + mon.hp + "/" + mon.maxhp + ")]");
        mtv("\n");
    }

}