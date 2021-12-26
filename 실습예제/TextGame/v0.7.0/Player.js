// 플레이어 클래스 생성
function Player (name, hp, maxhp, attack, exp, needexp) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.needexp = needexp; 

    this.info = function() {
        dw("[" + cha.name + "(" + cha.hp + "/" + cha.maxhp + ")](" + cha.exp + "/" + needexp + ") ");
    }

}