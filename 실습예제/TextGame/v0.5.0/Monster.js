// 몬스터 클래스 생성
function Monster (name, hp, maxhp, attack,) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;

    this.info = function() {
        dw("[" + mon.name + "(" + mon.hp + "/" + mon.maxhp + ")]");
    }

}