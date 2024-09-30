export async function loadSocials() {
    try {
        const response = await fetch('./src/json/socials.json');
        const data = await response.json();
        const socialsContainer = document.getElementById('home-socials');
        const socialsContainerFooter = document.getElementById('footer-socials');

        data.socials.forEach(social => {
            const socialIcon = document.createElement('a');
            socialIcon.href = social.link;
            socialIcon.target = "_blank";
            socialIcon.innerHTML = `<i class="fa-brands fa-${social.platform}"></i>`;
            socialsContainer.appendChild(socialIcon);
            socialsContainerFooter.appendChild(socialIcon.cloneNode(true));
        });
        
    } catch (error) {
        console.error('Erro ao carregar ícones sociais:', error);
    }
}
