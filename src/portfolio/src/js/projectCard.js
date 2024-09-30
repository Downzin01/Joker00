export async function loadProjects() {
    try {
        const response = await fetch('./src/json/projects.json');
        const projects = await response.json();
        const projectsGrid = document.getElementById('projects-grid');

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            projectCard.innerHTML = `
                <img src="${project.image}" alt="">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-buttom_group">
                    <a href="${project.liveDemo}" target="__blank" class="project-button">Live Demo</a>
                    <a href="${project.githubRepo}" target="__blank" class="project-button">Github Repo</a>
                </div>
            `;

            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
    }
}
