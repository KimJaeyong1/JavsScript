// const star = "☆";
const star = "*";
const space = "_";

/* 1 */
for(var i=1;i<=10;i=i+1){
    for(var j=1;j<=10;j++){
        document.write(star);
    }    
    document.write("<br>");
}

document.write("<hr>");

/* 2 */
for(var i=1;i<=10;i=i+1){
    for(var j=1;j<=i;j++){
        document.write(star);
    }    
    document.write("<br>");
}

document.write("<hr>");

/* 3 */
for(var i=1;i<=10;i=i+1){
    for(var j=10;j>=i;j--){
        document.write(star);
    }    
    document.write("<br>");
}

document.write("<hr>");

/* 4 */
for(var i=1;i<=10;i=i+1){
    for(var j=1;j<=10;j++){
        if(j>(i-1)){
            document.write(star);
        } else {
            document.write(space);
        }
    }    
    document.write("<br>");
}

document.write("<hr>");

/* 5 */
for(var i = 1 ; i <= 10 ; i = i + 1 ){
    for(var j = 1 ; j <= 10 ; j = j + 1){
        if(j <= (10 - i) ){   // 9-1 , 8-2
            document.write(space);
        } else {
            document.write(star);
        }
    }    
    document.write("<br>");
}
