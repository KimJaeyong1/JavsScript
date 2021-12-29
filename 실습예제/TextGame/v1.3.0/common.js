// function dw(ex) {
//     document.write(ex);
// }

// function dw(ex) {
//     var screenString = screen.value;
//     screenString = screenString + ex;
//     screen.value = screenString;
// }

function tv(ex) {
    var screenString = screenMessageBox.value;
    screenString = screenString + ex;
    screenMessageBox.value = screenString;
}

function ptv(ex) {
    var screenString = screenPlayerBox.value;
    screenString = screenString + ex;
    screenPlayerBox.value = screenString;
}

function mtv(ex) {
    var screenString = screenMonsterBox.value;
    screenString = screenString + ex;
    screenMonsterBox.value = screenString;
}

function br() {
    document.write("<br>");
}

function hr() {
    document.write("<hr>");
}