for(var i=2; i<=9; i++) {
    document.write(i+'단');
    document.write("<br>");
    for (var j=1; j<=9; j++){
        document.write(i+'x'+j+'='+(i*j));
        document.write("<br>");
    }
}