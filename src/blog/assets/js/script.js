document.addEventListener('DOMContentLoaded', function() {
    const postContainer = document.getElementById('post-container');

    // Função para buscar os posts da API
    function buscarPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                exibirPosts(posts);
                console.log(posts)
            })
            .catch(error => {
                console.error('Erro ao buscar os posts:', error);
            });
    }

    // Função para exibir os posts na página
    function exibirPosts(posts) {
        postContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;

            postContainer.appendChild(postElement);
        });
    }

    // Chama a função para buscar os posts
    buscarPosts();
});