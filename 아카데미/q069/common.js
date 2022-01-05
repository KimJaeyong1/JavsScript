// function dw (str) {
//     document.write(str);
// }

function tv (str) {
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;

    screenMessageBoxScrollToBot();

}

function tvClean() {
    screenMessageBox.value = "";
}

function tvPlayerinfo (str) {
    var screenString = screenPlayerInfo.value;
    screenPlayerInfo.value = str;
}

function tvMonsterinfo (str) {
    var screenString = screenMonsterInfo.value;
    screenMonsterInfo.value = str;
}

function tvMonsterinfoClear(){
    screenMonsterInfo.value = "";
}

function br () {
    document.write("<br>");
}

function hr () {
    document.write("<hr>");
}



