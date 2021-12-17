////////////////////////////////
//  Rock Paper Scissors v1.1  //
////////////////////////////////

// var player = prompt("가위=1 바위=2 보=3")
// var com = Math.floor(Math.random()*3+1);

// // 1 = 가위
// // 2 = 바위
// // 3 = 보


// if ( (player==1 && com==3) || (player==2 && com==1) || (player==3 && com==2) ) {
//     dw("플레이어 승리!");
//     } else if ( player == com) {
//             dw("드로우!");
//     } else {
//         dw ("플레이어 패패!");
//     }
//     br();

// dw ( "player : " + playerRpc + "com : " + com + "<br>");
// dw ("| 1= 가위 | 2 = 바위 | 3 = 보 |")




////////////////////////////////
//  Rock Paper Scissors v1.2  //
////////////////////////////////

var playerRpc = prompt("가위 바위 보")
var com = Math.floor(Math.random()*3+1);

var comRpc = "";
switch (com) {
    case 1: 
        comRpc = "가위"; 
        break;
        case 2: 
        comRpc = "바위"; 
        break;
        case 3: 
        comRpc = "보"; 
        break;
}


if ( (playerRpc=="가위" && comRpc=="보") || (playerRpc=="바위" && comRpc=="가위") || (playerRpc=="보" && comRpc=="바위") ) {
    dw("플레이어 승리!");
    } else if (playerRpc == comRpc) {
            dw("드로우!");
    } else {
        dw ("플레이어 패패!");
    }
    br();


dw ( "player : " + playerRpc + " | com : " + comRpc + "<br>");
