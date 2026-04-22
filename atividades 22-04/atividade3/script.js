let resultado = "";  // Variável que vai armazenar os números em formato de texto

for (let cont = 1; cont <= 20; cont++) {

    // verifica o número proibido
    if (cont == 10) {
        resultado += "Número proibido encontrado! Encerrando...";
        break; // para o loop
    }

    // Adiciona o número atual na variável resultado, com quebra de linha
    resultado += cont + "\n";
}

// mostra tudo no navegador
alert(resultado);
