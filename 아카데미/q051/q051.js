//-----------------------------------------------------//
//                  Text-RPG v2.0                  
//-----------------------------------------------------//
//              1. 전투 시작 메세지 출력                   
//              2. 전투 처리                            
//-----------------------------------------------------//



function Monster (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;

    this.info = function() {
        dw(mon.name+ " / "+mon.hp+ " / "+mon.attack); hr();
        br();
    }
}

var mon = new Monster("오크", 300, 50);


function Character (name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    
    this.info = function() {
        dw(cha.name+ " / "+cha.hp+ " / "+cha.attack); hr();
        br();
    }
}

var cha = new Character("엘프", 350, 80);

mon.info();
cha.info();

hr();
dw("전투시작");
hr();
br();

mon.hp = mon.hp - cha.attack;
cha.hp = cha.hp - mon.attack;
mon.info();
cha.info();
