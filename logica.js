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

//Constante para a senha
const senhaCorreta = "gabriel";

//Método que contabiliza o voto escolhido e informa quantos votos o candidato tem.
function contabilizarVotacao(senha) {
  //Verifica se a senha é correta
  if (senha === senhaCorreta) {
    //Verifica qual candidato foi escolhido
    const receberVoto = document.querySelector('select[name="candidato"]').value;

    //Atualiza o número de votos do candidato escolhido
    if (receberVoto == "Jackson") {
      votosJackson++;
      alert("Jackson tem " + votosJackson + " votos");
    } else if (receberVoto == "Gabriel") {
      votosGabriel++;
      alert("Gabriel tem " + votosGabriel + " votos");
    }
  } else {
    //Avisa que a senha está incorreta
    alert("Senha incorreta");
  }
}
