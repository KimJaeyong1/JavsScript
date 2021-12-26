// 몬스터 클래스 생성
function Monster (name, hp, maxhp, attack, exp) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;

    this.info = function() {
        dw("[" + mon.name + "(" + mon.hp + "/" + mon.maxhp + ")]");
    }

}