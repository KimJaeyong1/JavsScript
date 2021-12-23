function Character (name, maxhp, hp, attack, exp, needexp) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    this.exp = exp;
    this.needexp = needexp;
    
    this.info = function() {
        dw("["+cha.name+"("+cha.hp+"/"+cha.maxhp+")] exp :("+cha.exp+"/"+cha.needexp+")");
    }
}

var cha = new Character("엘프", 250, 300, 70, 0, 300);