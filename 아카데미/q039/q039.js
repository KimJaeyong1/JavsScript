var lottoNumbers = new Array(6);


for (var i=0; i<lottoNumbers.length; i++){
    lottoNumbers[i] = Math.floor(Math.random()*45)+1;
    for (var j=0; j<i; j++) {
        if(lottoNumbers[i] == lottoNumbers[j]) {
            i= i-1;
            break;
        }
    }
}
dw(lottoNumbers);

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
dw(lottoCount + "개 일치 합니다")

