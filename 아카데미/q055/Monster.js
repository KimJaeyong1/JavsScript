function Monster (name, maxhp, hp, attack) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw("["+mon.name+"("+mon.hp+"/"+mon.maxhp+")]");
    }
}

var mon = new Monster("오크", 200, 250, 50);