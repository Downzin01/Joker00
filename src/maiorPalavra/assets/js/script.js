document.getElementById('startButton').addEventListener('click', function() {
    let entrada = prompt("Digite várias palavras separadas por espaço:");

    // Verifica se o usuário cancelou o prompt
    if (entrada === null) {
        return;
    }

    let palavras = entrada.split(' ');

    // Variáveis para armazenar a maior palavra e seu tamanho
    let maiorPalavra = '';
    let maiorTamanho = 0;

    // Loop para verificar cada palavra
    for (let palavra of palavras) {
        if (palavra.length > maiorTamanho) {
            maiorTamanho = palavra.length;
            maiorPalavra = palavra;
        }
    }

    // Exibe a palavra com o maior número de caracteres
    document.getElementById('result').textContent = "A palavra com o maior número de caracteres é: " + maiorPalavra;
});
