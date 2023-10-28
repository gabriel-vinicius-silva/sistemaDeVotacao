/**
*
* @author Jackson Roberio
* @author Gabriel Vinicius
*/
//Variáveis dos candidatos
var votosJackson = 0;
var votosGabriel = 0;
var votosCiro = 0;
var votosBolsonaro = 0;
var votosLula = 0;

//Método que contabiliza o voto escolhido e informa quantos votos o candidato tem.
function contibilizarVotacao() {
	alert("Seu voto foi computado");
	const receberVoto = document.querySelector('select[name="candidato"]').value;
	
	if(receberVoto == "Jackson"){
		votosJackson = votosJackson + 1;
		alert("Jackson tem " + votosJackson + " votos");
	}
	
	if(receberVoto == "Gabriel"){
		votosGabriel += 1;
	}
}

