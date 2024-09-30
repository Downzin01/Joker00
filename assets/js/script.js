function gerarBotoes() {
    const container = document.getElementById('botoesContainer');
    const paginas = [
        { src: 'src/blog' },
        { src: 'src/formulario' },
        { src: 'src/jogoDaVelha' },
        { src: 'src/listaCompras' },
        { src: 'src/maiorPalavra' },
        { src: 'src/mediaArray' },
        { src: 'src/portfolio' },
        { src: 'src/previsaoDoTempo' },
    ];

    // Obtém o caminho base da URL atual sem o arquivo index.html
    const baseUrl = window.location.href.split('index.html')[0];

    for (let i = 0; i < paginas.length; i++) {
        const botao = document.createElement('button');
        botao.className = 'card-menu-botao';
        botao.textContent = i + 1; // Adiciona 1 para o texto do botão

        // Define o comportamento ao clicar no botão
        botao.onclick = function () {
            const novaUrl = `${baseUrl}${paginas[i].src}/index.html`; // Concatena a nova URL corretamente
            window.open(novaUrl, '_blank'); // Abre a nova URL em uma nova guia
        };

        container.appendChild(botao);
    }
}

gerarBotoes();
