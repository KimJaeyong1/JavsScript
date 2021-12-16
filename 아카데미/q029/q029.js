// Rock Paper Scissors
var player = prompt("가위=1 바위=2 보=3")
var com = Math.floor(Math.random()*3+1);

// 1 = 가위
// 2 = 바위
// 3 = 보

if ( (player==1 && com==3) || (player==2 && com ==1) || (player==3 && com==2) ) {
    dw ("플레이어 승리!");
}   else if ( player == com ) {
    dw ("드로우!");
} else {
    dw ("플레이어 패배!");
}
br();
br();
br();
dw ('player (' + player +')' + ' : com  (' + com +')');
br();
br();
dw ('| 1 = 가위 / 2 = 바위 / 3 = 보 |')
