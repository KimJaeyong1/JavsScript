var lottoNumbers = Array(6);


for (var i = 0; i < lottoNumbers.length; i++) {
    lottoNumbers[i] = Math.floor(Math.random() * 45) + 1;
    for (var j = 0; j < i; j++) {
        if (lottoNumbers[i] == lottoNumbers[j]) {
            i--;
            break;
        }
    }
}
dw(lottoNumbers);
br();
br();


br();
br();

var myLotto = [1, 3, 27, 15, 35, 40];
dw(myLotto);
br();

var lottoCount = 0;
for (var k = 0; k < 6; k++) {
    if (myLotto[0] == lottoNumbers[k]) {
        lottoCount = lottoCount + 1;
    }
}

for (var k = 0; k < 6; k++) {
    if (myLotto[1] == lottoNumbers[k]) {
        lottoCount = lottoCount + 1;
    }
}

for (var k = 0; k < 6; k++) {
    if (myLotto[2] == lottoNumbers[k]) {
        lottoCount = lottoCount + 1;
    }
}


for (var k = 0; k < 6; k++) {
    if (myLotto[3] == lottoNumbers[k]) {
        lottoCount = lottoCount + 1;
    }
}

for (var k = 0; k < 6; k++) {
    if (myLotto[4] == lottoNumbers[k]) {
        lottoCount = lottoCount + 1;
    }
}

for (var k = 0; k < 6; k++) {
    if (myLotto[5] == lottoNumbers[k]) {
        lottoCount = lottoCount + 1;
    }
}


br();

switch (lottoCount) {
    case 0:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("낙첨 입니다");
        break;
    case 1:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("낙첨 입니다");
        break;
    case 2:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("낙첨 입니다");
        break;
    case 3:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("5등 당첨 입니다");
        break;
    case 4:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("4등 당첨 입니다");
        break;
    case 5:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("3등 당첨 입니다");
        break;
    case 6:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("1등 당첨 입니다");
        break;
}

