document.getElementById('startButton').addEventListener('click', function() {
    let entrada = prompt("Digite sua lista de compras, separada por vírgula:");

    if (entrada === null) {
        return;
    }

    // Divide a string em um array de itens
    let listaCompras = entrada.split(',');

    // Remove espaços em branco no início e no final de cada item
    listaCompras = listaCompras.map(item => item.trim());

    // Ordena a lista alfabeticamente
    listaCompras.sort();

    // Exibe a lista ordenada
    document.getElementById('result').textContent = "Sua lista de compras ordenada é:\n\n" + listaCompras.join('\n');
});
