function Monster (name, maxhp, hp, attack, exp, gold, location) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.gold = gold;
    this.location = location;

    this.info = function() {
        tvMonsterinfo("["+this.name+"("+this.hp+"/"+this.maxhp+")]");
    }

    this.getInfo = function() {
        return "["+this.name+"("+this.hp+"/"+this.maxhp+")]"
    }

}
