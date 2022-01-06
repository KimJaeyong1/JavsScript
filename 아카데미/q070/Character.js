function Character (name, maxhp, hp, attack, exp, needexp, gold) {
    this.name = name;
    this.hp = hp;
    this.maxhp = maxhp;
    this.attack = attack;
    this.exp = exp;
    this.needexp = needexp;
    this.gold = gold;
    
    this.info = function() {
        tvPlayerinfo("["+this.name+"("+this.hp+"/"+this.maxhp+")](exp:"+this.exp+"/"+this.needexp+")");
    }
}
