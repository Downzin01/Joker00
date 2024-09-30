function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica do formulário
    if (nome === "") {
        alert("Por favor, insira seu nome.");
        return false;
    }

    if (email === "") {
        alert("Por favor, insira seu e-mail.");
        return false;
    }

    if (assunto === "") {
        alert("Por favor, insira o assunto.");
        return false;
    }

    if (mensagem === "") {
        alert("Por favor, insira sua mensagem.");
        return false;
    }

    // Verifica se o e-mail é válido
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Criar o conteúdo da embed para enviar ao Discord
    const webhookURL = 'https://discord.com/api/webhooks/1290125317070917673/u5GM2WbJV318QvQCkE6RES3cxzRVUJM68K2vu2q4IYyAxawOzwE1eT0miBHiJKY5fw4M'; // Substitua pela sua URL do webhook

    const embedMessage = {
        content: "Novo formulário enviado!", // Mensagem de texto adicional
        embeds: [
            {
                title: "Detalhes do Formulário",
                description: `**Nome:** ${nome}\n**Email:** ${email}\n**Assunto:** ${assunto}`,
                color: 0x5dade2, 
                thumbnail: {
                    url: "https://media1.tenor.com/m/OgbTZ-QCVycAAAAC/madotsuki-yume-nikki.gif"
                },
                image: {
                    url: "https://media1.tenor.com/m/SiVAwPLtkfoAAAAC/yume-nikki-life-of-madotsuki.gif"
                },
                fields: [
                    {
                        name: "Mensagem",
                        value: mensagem,
                        inline: false
                    }
                ],
                footer: {
                    text: "Formulário enviado com sucesso!",
                },
                timestamp: new Date(), // Adiciona data e hora ao rodapé da embed
            }
        ]
    };

    // Enviar a embed para o Discord usando fetch
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedMessage)
    })
    .then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Erro ao enviar o formulário para o Discord.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar a mensagem para o Discord:', error);
        alert('Erro ao enviar o formulário para o Discord.');
    });

    return false; // Previne que o formulário seja enviado via HTTP tradicional
}
