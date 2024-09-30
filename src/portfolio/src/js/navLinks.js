// Função para carregar os links do arquivo JSON
export async function loadNavLinks() {
    try {
        const response = await fetch('./src/json/navLinks.json'); 
        const data = await response.json();
        const navLinksContainer = document.getElementById('nav-links');

        // Limpar qualquer conteúdo existente (se houver)
        navLinksContainer.innerHTML = '';

        // Loop pelos links e gerar o HTML
        data.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;

            listItem.appendChild(anchor);
            navLinksContainer.appendChild(listItem);
        });

    } catch (error) {
        console.error('Erro ao carregar os links de navegação:', error);
    }
}


