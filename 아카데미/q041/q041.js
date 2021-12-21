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

var bonusNum;
while (true) {
    bonusNum = Math.floor(Math.random() * 45) + 1;
    if (bonusNum == lottoNumbers[0]) {
        continue;
    } else if (bonusNum == lottoNumbers[1]) {
        continue;
    } else if (bonusNum == lottoNumbers[2]) {
        continue;
    } else if (bonusNum == lottoNumbers[3]) {
        continue;
    } else if (bonusNum == lottoNumbers[4]) {
        continue;
    } else if (bonusNum == lottoNumbers[5]) {
        continue;
    } else {
        dw("보너스 번호: " + bonusNum)
        break;
    }
}

br();
br();

var myLotto = [1, 2, 3, 4, 5, 6];
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
        if (myLotto[0] == bonusNum) {
            dw(lottoCount + "개 일치 보너스번호도 일치합니다");
            br();
            br();
            dw("2등 당첨 입니다");
        } else if (myLotto[1] == bonusNum) {
            dw(lottoCount + "개 일치 보너스번호도 일치합니다");
            br();
            br();
            dw("2등 당첨 입니다");
        } else if (myLotto[2] == bonusNum) {
            dw(lottoCount + "개 일치 보너스번호도 일치합니다");
            br();
            br();
            dw("2등 당첨 입니다");
        } else if (myLotto[3] == bonusNum) {
            dw(lottoCount + "개 일치 보너스번호도 일치합니다");
            br();
            br();
            dw("2등 당첨 입니다");
        } else if (myLotto[4] == bonusNum) {
            dw(lottoCount + "개 일치 보너스번호도 일치합니다");
            br();
            br();
            dw("2등 당첨 입니다");
        } else if (myLotto[5] == bonusNum) {
            dw(lottoCount + "개 일치 보너스번호도 일치합니다");
            br();
            br();
            dw("2등 당첨 입니다");
        } else {
            dw(lottoCount + "개 일치 합니다");
            br();
            br();
            dw("3등 당첨 입니다");
        }
        break;
    case 6:
        dw(lottoCount + "개 일치 합니다");
        br();
        br();
        dw("1등 당첨 입니다");
        break;
}

