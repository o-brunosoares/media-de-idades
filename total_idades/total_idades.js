function pulaLinha() {

    document.write("<br><br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantos familiares você tem?"));

var totalPerguntas = 1;
var totalIdades = 0;

while (totalPerguntas <= totalFamiliares) {

    var idadeFamiliares = parseInt(prompt("Digite a idade do seu familiar"));
    totalIdades = totalIdades + idadeFamiliares;
    totalPerguntas++;
}

var mediaIdades = totalIdades/totalFamiliares;
mostra("A média das idades dos seus familiares é " + mediaIdades + ".");