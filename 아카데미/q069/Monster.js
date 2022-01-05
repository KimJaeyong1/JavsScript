function Monster (name, maxhp, hp, attack, exp, gold, location) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.gold = gold;
    this.location = location;

    this.info = function() {
        tvMonsterinfo("["+mon.name+"("+mon.hp+"/"+mon.maxhp+")]");
    }

    this.getInfo = function() {
        return "["+mon.name+"("+mon.hp+"/"+mon.maxhp+")]"
    }

}
