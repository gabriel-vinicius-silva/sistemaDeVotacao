function comprovante() {
    var pergunta = prompt("Se quiser prosseguir com a votação, digite 'ok'");

    if (pergunta !== 'ok') {
        alert("Precisamos que você escreva 'ok' para continuar.");
        // Retorna o código caso não seja escrito 'ok'
        return;
    } else {
        alert("Ok! Preencha os campos a seguir");
    }

    var nome = prompt("Informe seu nome?");
    var idade = prompt("Informe sua idade?");
    var imprimirComprovante = prompt("Se quiser prosseguir com o comprovante, digite 'ok'");

    if (imprimirComprovante !== 'ok') {
        alert("Precisamos que você escreva 'ok' para continuar.");
        // Retorna o código caso não seja escrito 'ok'
        return;
    } else {
        var comprovanteText = "Comprovante de votação de " + nome + "\n\n" + "Idade: " + idade + " anos";
        document.getElementById("comprovante").innerText = comprovanteText;
    }
}