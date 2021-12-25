// 플레이어 클래스 생성
function Player (name, hp, maxhp, attack,) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;

    this.info = function() {
        dw("[" + cha.name + "(" + cha.hp + "/" + cha.maxhp + ")]");
    }

}