random = Math.floor(Math.random()*9) + 1;
random1 = Math.floor(Math.random()*9) + 1;
random2 = Math.floor(Math.random()*9) + 1;
// document.write(random, random1, random2);

if (random == random1 && random == random2){
    document.write("<div id='congratulation'>congratulation!</div>");
}

switch (random) {
    case 1:
        document.write("<div class='num_1'><img src='image/n1.png'></div>");
        break;
    case 2:
        document.write("<div class='num_1'><img src='image/n2.png'></div>");
        break;
    case 3:
        document.write("<div class='num_1'><img src='image/n3.png'></div>");
        break;
    case 4:
        document.write("<div class='num_1'><img src='image/n4.png'></div>");
        break;
    case 5:
        document.write("<div class='num_1'><img src='image/n5.png'></div>");
        break;
    case 6:
        document.write("<div class='num_1'><img src='image/n6.png'></div>");
        break;
    case 7:
        document.write("<div class='num_1'><img src='image/n7.png'></div>");
        break;
    case 8:
        document.write("<div class='num_1'><img src='image/n8.png'></div>");
        break;
    case 9:
        document.write("<div class='num_1'><img src='image/n9.png'></div>");
        break;
}

switch (random1) {
    case 1:
        document.write("<div class='num_2'><img src='image/n1.png'></div>");
        break;
    case 2:
        document.write("<div class='num_2'><img src='image/n2.png'></div>");
        break;
    case 3:
        document.write("<div class='num_2'><img src='image/n3.png'></div>");
        break;
    case 4:
        document.write("<div class='num_2'><img src='image/n4.png'></div>");
        break;
    case 5:
        document.write("<div class='num_2'><img src='image/n5.png'></div>");
        break;
    case 6:
        document.write("<div class='num_2'><img src='image/n6.png'></div>");
        break;
    case 7:
        document.write("<div class='num_2'><img src='image/n7.png'></div>");
        break;
    case 8:
        document.write("<div class='num_2'><img src='image/n8.png'></div>");
        break;
    case 9:
        document.write("<div class='num_2'><img src='image/n9.png'></div>");
        break;
}

switch (random2) {
    case 1:
        document.write("<div class='num_3'><img src='image/n1.png'></div>");
        break;
    case 2:
        document.write("<div class='num_3'><img src='image/n2.png'></div>");
        break;
    case 3:
        document.write("<div class='num_3'><img src='image/n3.png'></div>");
        break;
    case 4:
        document.write("<div class='num_3'><img src='image/n4.png'></div>");
        break;
    case 5:
        document.write("<div class='num_3'><img src='image/n5.png'></div>");
        break;
    case 6:
        document.write("<div class='num_3'><img src='image/n6.png'></div>");
        break;
    case 7:
        document.write("<div class='num_3'><img src='image/n7.png'></div>");
        break;
    case 8:
        document.write("<div class='num_3'><img src='image/n8.png'></div>");
        break;
    case 9:
        document.write("<div class='num_3'><img src='image/n9.png'></div>");
        break;
}

function refreshPage(){
    window.location.reload();
}