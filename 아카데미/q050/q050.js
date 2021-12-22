function Monster (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw(name); hr();
        dw(hp); hr();
        dw(attack); hr();
        br();
    }
}

var mon = new Monster("오크", 1000, 50);

mon.info();

function Character (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw(name); hr();
        dw(hp); hr();
        dw(attack); hr();
        br();
    }
}

var cha = new Character("엘프", 1500, 80);

cha.info();