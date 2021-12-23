function Monster (name, maxhp, hp, maxhp, attack, exp, gold) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.gold = gold;

    this.info = function() {
        dw("["+mon.name+"("+mon.hp+"/"+mon.maxhp+")]");
    }
}

var mon = new Monster("오크", 200, 250, 250, 30, 50, 100);