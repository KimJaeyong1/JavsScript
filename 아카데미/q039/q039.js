var lottoNumbers = Array(6);


lottoNumbers[0] = Math.floor(Math.random()*45)+1;
// 1번째 번호
dw(lottoNumbers[0]);
hr();
// 2번째 번호
while (true) {
    lottoNumbers[1] = Math.floor(Math.random()*45)+1;
    if (lottoNumbers[0] == lottoNumbers[1])
        continue;
    else {
        dw(lottoNumbers[1]);
        hr();
        break;
    }
}
// 3번째 번호
while (true) {
    lottoNumbers[2] = Math.floor(Math.random()*45)+1;
    if (lottoNumbers[0] == lottoNumbers[2]) {
        continue;
    } else if (lottoNumbers[1] == lottoNumbers[2]) {
        continue;
    } else {
        dw(lottoNumbers[2]);
        hr();
        break;
    }
}
// 4번째 번호
while (true) {
    lottoNumbers[3] = Math.floor(Math.random()*45)+1;
    if (lottoNumbers[0] == lottoNumbers[3]) {
        continue;
    } else if (lottoNumbers[1] == lottoNumbers[3]) {
        continue;
    } else if (lottoNumbers[2] == lottoNumbers[3]) {
        continue;
    } else {
        dw(lottoNumbers[3]);
        hr();
        break;
    }
}
// 5번째 번호
while (true) {
    lottoNumbers[4] = Math.floor(Math.random()*45)+1;
    if (lottoNumbers[0] == lottoNumbers[4]) {
        continue;
    } else if (lottoNumbers[1] == lottoNumbers[4]) {
        continue;
    } else if (lottoNumbers[2] == lottoNumbers[4]) {
        continue;
    } else if (lottoNumbers[3] == lottoNumbers[4]) {
        continue;
    } else {
        dw(lottoNumbers[4]);
        hr();
        break;
    }
}
// 6번째 번호
while (true) {
    lottoNumbers[5] = Math.floor(Math.random()*45)+1;
    if (lottoNumbers[0] == lottoNumbers[5]) {
        continue;
    } else if (lottoNumbers[1] == lottoNumbers[5]) {
        continue;
    } else if (lottoNumbers[2] == lottoNumbers[5]) {
        continue;
    } else if (lottoNumbers[3] == lottoNumbers[5]) {
        continue;
    } else if (lottoNumbers[4] == lottoNumbers[5]) {
        continue;
    } else {
        dw(lottoNumbers[5]);
        hr();
        break;
    }
}

br();
br();

var myLotto = [1, 11, 21, 31, 41, 45];
dw(myLotto);
br();
var lottoCount = 0;

for (var k=0; k<6; k++) {
    if (myLotto[0] == lottoNumbers[k]) {
        lottoCount = lottoCount + 1;
    }
}

// if (myLotto[0] == lottoNumbers[0]) {
//     lottoCount = lottoCount + 1;
// } else if (myLotto[0] == lottoNumbers[1]) {
//     lottoCount = lottoCount + 1;
// } else if (myLotto[0] == lottoNumbers[2]) {
//     lottoCount = lottoCount + 1;
// } else if (myLotto[0] == lottoNumbers[3]) {
//     lottoCount = lottoCount + 1;
// } else if (myLotto[0] == lottoNumbers[4]) {
//     lottoCount = lottoCount + 1;
// } else if (myLotto[0] == lottoNumbers[5]) {
//     lottoCount = lottoCount + 1;
// } 

if (myLotto[1] == lottoNumbers[0]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[1] == lottoNumbers[1]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[1] == lottoNumbers[2]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[1] == lottoNumbers[3]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[1] == lottoNumbers[4]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[1] == lottoNumbers[5]) {
    lottoCount = lottoCount + 1;
}

if (myLotto[2] == lottoNumbers[0]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[2] == lottoNumbers[1]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[2] == lottoNumbers[2]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[2] == lottoNumbers[3]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[2] == lottoNumbers[4]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[2] == lottoNumbers[5]) {
    lottoCount = lottoCount + 1;
} 

if (myLotto[3] == lottoNumbers[0]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[3] == lottoNumbers[1]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[3] == lottoNumbers[2]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[3] == lottoNumbers[3]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[3] == lottoNumbers[4]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[3] == lottoNumbers[5]) {
    lottoCount = lottoCount + 1;
} 

if (myLotto[4] == lottoNumbers[0]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[4] == lottoNumbers[1]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[4] == lottoNumbers[2]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[4] == lottoNumbers[3]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[4] == lottoNumbers[4]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[4] == lottoNumbers[5]) {
    lottoCount = lottoCount + 1;
} 

if (myLotto[5] == lottoNumbers[0]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[5] == lottoNumbers[1]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[5] == lottoNumbers[2]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[5] == lottoNumbers[3]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[5] == lottoNumbers[4]) {
    lottoCount = lottoCount + 1;
} else if (myLotto[5] == lottoNumbers[5]) {
    lottoCount = lottoCount + 1;
}

br();
dw(lottoCount + "개 일치합니다")