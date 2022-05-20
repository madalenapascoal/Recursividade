//recursividade é uma função que chama a si própria
//posso usar a recursividade para substituir continuos de um loop
//é um recurso de programação que também pode ser usado em JS

document.write("<br><br><br><hr> Loop recursivo <br><br><br>");

function contador(min, max) {
    document.write(min + "<br>");
    if (min < max) {
        contador(++min, max);
    }
}
contador(1, 10);

document.write("<hr> Factorial <br>");

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
document.write(factorial(5));


////////////////////////////////////////////////////////////////////////
var obj = document.getElementById("quad");
var ang = 0;
var anima;

function gira() {
    obj.style.transform = "rotate(" + ang + "deg)";
    ang++;
    if (ang > 360) {
        ang = 0;
    }
    anima = requestAnimationFrame(gira);
}
gira();