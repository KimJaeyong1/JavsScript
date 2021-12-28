// 플레이어 클래스 생성
function Player (name, hp, maxhp, attack, exp, needexp, gold) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.needexp = needexp;
    this.gold = gold;

    this.info = function() {
        dw("[" + cha.name + "(HP:" + cha.hp + "/" + cha.maxhp + ")](경험치:" + cha.exp + "/" + needexp + ") ");
    }

}