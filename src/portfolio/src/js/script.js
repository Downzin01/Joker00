window.onload = async () => {
    // Carregar os links de navegação
    const navLinksModule = await import('./navLinks.js');
    navLinksModule.loadNavLinks();

    // Carregar os ícones sociais
    const socialsModule = await import('./socials.js');
    socialsModule.loadSocials();

    // Carregar os projetos
    const projectsModule = await import('./projectCard.js');
    projectsModule.loadProjects();

    // Iniciar o efeito de digitação
    const wordsSpanModule = await import('./wordsSpan.js');
    wordsSpanModule.type();
};

// Alternar o menu de navegação
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};
