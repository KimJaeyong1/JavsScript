/////////////////////////////////
//  Rock Paper Scissors  v2.0  //
/////////////////////////////////

while(true) {
    var playerRpc = prompt("가위 바위 보")
    if (playerRpc=="가위" || playerRpc=="바위" || playerRpc=="보") {
        break;
        } else {
        alert("가위, 바위, 보만 입력 가능 합니다!")
        }
}
    
    var com = Math.floor(Math.random()*3 +1)
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
        dw("<div id='title'>가위! 바위! 보!</div>");

        dw("<div id='screen'>");
        dw("<div id='playerImg'> </div>");
        dw("<div id='vs'>VS</div>");
        dw("<div id='comImg'> </div>");
        dw("</div>")
        var box = document.getElementById("playerImg");
        switch(playerRpc) {
            case "가위":
            box.innerHTML="<img id='image' src='sc.png'>";
            break;
            case "바위" :
            box.innerHTML="<img id='image' src='ro.png'>";
            break;
            case "보" :
            box.innerHTML="<img id='image' src='pa.png'>";
            break;
        }

        var box = document.getElementById("comImg");
        switch(comRpc) {
            case "가위":
            box.innerHTML="<img id='image' src='c_sc.png'>";
            break;
            case "바위" :
            box.innerHTML="<img id='image' src='c_ro.png'>";
            break;
            case "보" :
            box.innerHTML="<img id='image' src='c_pa.png'>";
            break;
        }
        
        
        if ( (playerRpc=="가위" && comRpc=="보") || (playerRpc=="바위" && comRpc=="가위") || (playerRpc=="보" && comRpc=="바위") ) {
            dw("<div id='result'>플레이어 승리!</div>");
            } else if (playerRpc == comRpc) {
                dw("<div id='result'>드로우!</div>");
            } else {
                dw ("<div id='result'>플레이어 패배!</div>");
            }

