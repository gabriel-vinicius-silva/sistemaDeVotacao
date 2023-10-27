// Cria um objeto para armazenar os votos
const votos = new Map();

// Inicializa a urna com os candidatos
votos.set("jackson", 0);
votos.set("gabriel", 0);
votos.set("ciro", 0);
votos.set("Bolsonaro", 0);
votos.set("Lula", 0);

// Coleta os votos dos eleitores
let continuar = true;
while (continuar) {
  // Solicita o nome do candidato
  const candidato = prompt("Digite o nome do candidato: ");

  // Verifica se o candidato é válido
  if (!votos.has(candidato)) {
    alert("Candidato inválido.");
    continue;
  }

  // Adiciona o voto ao candidato
  votos.set(candidato, votos.get(candidato) + 1);

  // Verifica se a votação terminou
  const resposta = prompt("Deseja votar novamente? (S/N)");
  continuar = resposta.toLowerCase() === "s";
}

// Exibe o resultado da votação
console.log("Resultado da votação:");
for (const candidato of votos.keys()) {
  console.log(`Candidato: ${candidato}, Votos: ${votos.get(candidato)}`);
}
