function gerarComprovante() {
    var pergunta = prompt("Para prosseguir com a votação, digite 'ok'");

    if (pergunta !== 'ok') {
        alert("Precisamos que você escreva 'ok' para continuar.");
        return;
    } else {
        alert("Ok! Preencha os campos a seguir");
    }

    var nome = prompt("Informe seu nome:");
    var idade = prompt("Informe sua idade:");
    var cidade = prompt("Informe sua cidade:");
    var estado = prompt("Informe seu estado:");
    
    var imprimirComprovante = prompt("Para prosseguir com o comprovante, digite 'ok'");

    if (imprimirComprovante !== 'ok') {
        alert("Precisamos que você escreva 'ok' para continuar.");
        return;
    } else {
        var dataEmissao = new Date();
        var dataFormatada = dataEmissao.toLocaleString(); // Obtém a data e hora formatada

        var comprovanteText = "Comprovante de votação de " + nome + "\n\n" + 
                            "Idade: " + idade + " anos\n" + 
                            "Cidade: " + cidade + "\n" + 
                            "Estado: " + estado + "\n" +
                            "Data de Emissão: " + dataFormatada;

        document.getElementById("comprovante").innerText = comprovanteText;
    }
}
