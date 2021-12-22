function Character (name, maxhp, hp, attack) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = hp;
    this.attack = attack;
    
    this.info = function() {
        dw("["+cha.name+"("+cha.hp+"/"+cha.maxhp+")]"); hr();
        br();
    }
}

var cha = new Character("엘프", 250, 250, 80);