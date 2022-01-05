function Monster (name, maxhp, hp, attack, exp, gold) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.gold = gold;

    this.info = function() {
        tvMonsterinfo("["+mon.name+"("+mon.hp+"/"+mon.maxhp+")]");
    }
}
