const star = "☆";

for (var i = 1; i<=10; i++) {
    for (var j = 10; j>=i; j--) {
        document.write(star);
    }
    document.write("<br>");
}