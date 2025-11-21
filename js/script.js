document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages-container');

    // Função para carregar as mensagens
    async function loadMessages() {
        try {
            const response = await fetch('data/messages.json');
            if (!response.ok) {
                throw new Error('Não foi possível carregar as mensagens');
            }
            const messages = await response.json();
            renderMessages(messages);
        } catch (error) {
            console.error('Erro:', error);
            messagesContainer.innerHTML = '<p class="error">Ops! Ocorreu um erro ao carregar os recados.</p>';
        }
    }

    // Função para renderizar as mensagens na tela
    function renderMessages(messages) {
        messagesContainer.innerHTML = ''; // Limpa o container (remove o loading)

        // Inverte a ordem para mostrar os mais recentes primeiro (opcional, dependendo de como o JSON é mantido)
        // Vamos assumir que novos são adicionados no final do array, então invertemos para mostrar no topo
        const reversedMessages = [...messages].reverse();

        reversedMessages.forEach((msg, index) => {
            const card = createMessageCard(msg, index);
            messagesContainer.appendChild(card);
        });
    }

    // Função para criar o elemento HTML de um card
    function createMessageCard(msg, index) {
        const card = document.createElement('div');
        card.className = 'message-card';
        
        // Adiciona uma cor aleatória ou sequencial para a borda
        const colorIndex = (index % 4) + 1;
        card.classList.add(`card-color-${colorIndex}`);

        const content = document.createElement('p');
        content.className = 'message-content';
        content.textContent = `"${msg.message}"`;

        const footer = document.createElement('div');
        footer.className = 'message-author';
        
        const authorName = document.createElement('span');
        authorName.textContent = `- ${msg.name}`;

        const dateSpan = document.createElement('span');
        dateSpan.className = 'message-date';
        // Formata a data se possível
        try {
            const dateObj = new Date(msg.date);
            dateSpan.textContent = dateObj.toLocaleDateString('pt-BR');
        } catch (e) {
            dateSpan.textContent = msg.date;
        }

        footer.appendChild(authorName);
        footer.appendChild(dateSpan);

        card.appendChild(content);
        card.appendChild(footer);

        return card;
    }

    // Inicia o carregamento
    loadMessages();
});
