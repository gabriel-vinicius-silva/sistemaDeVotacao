import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class baseDaUrna {

    private static HashMap<String, Integer> votos = new HashMap<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Inicializa a urna com os candidatos
        votos.put("jackson", 0);
        votos.put("gabriel", 0);
        votos.put("ciro", 0);
        votos.put("Bolsonaro", 0);
        votos.put("Lula", 0);

        // Coleta os votos dos eleitores
        while (true) {
            System.out.println("Digite o nome do candidato: ");
            String candidato = scanner.nextLine();

            // Verifica se o candidato é válido
            if (!votos.containsKey(candidato)) {
                System.out.println("Candidato inválido.");
                continue;
            }

            // Adiciona o voto ao candidato
            votos.put(candidato, votos.get(candidato) + 1);

            // Verifica se a votação terminou
            System.out.println("Deseja votar novamente? (S/N)");
            String resposta = scanner.nextLine();
            if (resposta.equalsIgnoreCase("N")) {
                break;
            }
        }

        // Exibe o resultado da votação
        System.out.println("Resultado da votação:");
        for (String candidato : votos.keySet()) {
            System.out.println("Candidato: " + candidato + ", Votos: " + votos.get(candidato));
        }
    }
}
