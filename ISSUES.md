# 🎯 Issues - Fase 2 do Workshop

Estas são as **issues oficiais da Fase 2** do workshop! Escolha uma, implemente a solução e abra um Pull Request.

**Importante:** Antes de começar, comente na issue dizendo que você vai trabalhar nela para evitar trabalho duplicado! 💬

Use o GitHub Copilot para te ajudar em cada etapa! 🚀

---

## 🌙 Issue #1: Dark Mode / Light Mode Toggle

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Adicione um botão para alternar entre modo claro e escuro no mural.

**Dicas:**
- Crie um botão no header (pode ser um ícone de sol/lua ☀️🌙)
- Use `localStorage` para salvar a preferência do usuário
- Crie variáveis CSS para as cores do tema escuro
- Use JavaScript para alternar a classe `dark-mode` no body

**Pergunte ao Copilot:**
> "@workspace Como adicionar um toggle de dark mode que salva a preferência do usuário?"

---

## 🔍 Issue #2: Buscar Gambiarras

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Adicione uma barra de busca para filtrar as gambiarras por nome ou conteúdo.

**Dicas:**
- Coloque um input de busca abaixo do header
- Filtre os cards em tempo real enquanto o usuário digita
- Use `filter()` para buscar no array de mensagens
- Considere buscar tanto no nome quanto na mensagem

**Pergunte ao Copilot:**
> "@workspace Adicione uma funcionalidade de busca que filtra as gambiarras em tempo real"

---

## ❤️ Issue #3: Sistema de "Curtidas"

**Dificuldade:** ⭐⭐⭐ Avançado

**Descrição:**
Adicione um botão de "curtir" em cada card e mostre o contador de curtidas.

**Dicas:**
- Adicione um botão com ❤️ ou 👍 em cada card
- Use `localStorage` para salvar as curtidas (chave: ID da mensagem)
- Adicione um contador ao lado do botão
- Mude o estilo do botão quando já foi curtido

**Pergunte ao Copilot:**
> "@workspace Como adicionar um sistema de curtidas que persiste usando localStorage?"

---

## 🎨 Issue #4: Personalizar Cores dos Cards

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Crie um seletor de cor para cada card, permitindo que os usuários escolham sua cor favorita.

**Dicas:**
- Adicione um `<input type="color">` em cada card
- Salve a cor escolhida no `localStorage` usando o índice do card
- Aplique a cor personalizada quando a página carregar
- Adicione um botão "Resetar cor" para voltar à cor original da paleta

**Pergunte ao Copilot:**
> "@workspace Adicione a funcionalidade de personalizar a cor da borda de cada card"

---

## 📱 Issue #5: Compartilhar no Twitter/X/

**Dificuldade:** ⭐ Fácil

**Descrição:**
Adicione um botão em cada card para compartilhar a gambiarra no Twitter/X.

**Dicas:**
- Use a Twitter Web Intent URL: `https://twitter.com/intent/tweet?text=...`
- Monte o texto com a gambiarra e um hashtag #GambiConf
- Adicione um ícone ou emoji 🐦
- Use `encodeURIComponent()` para codificar o texto

**Pergunte ao Copilot:**
> "@workspace Adicione um botão para compartilhar cada gambiarra no Twitter"

---

## 🎲 Issue #6: Gambiarra Aleatória

**Dificuldade:** ⭐ Fácil

**Descrição:**
Adicione um botão "Gambiarra Aleatória" que destaca um card aleatório.

**Dicas:**
- Adicione um botão no header
- Use `Math.random()` para escolher um índice aleatório
- Adicione uma classe especial (exemplo: `highlight`) ao card escolhido
- Use `scrollIntoView()` para rolar até o card
- Adicione uma animação CSS para chamar atenção

**Pergunte ao Copilot:**
> "@workspace Como fazer um botão que destaca e rola até uma gambiarra aleatória?"

---

## 📊 Issue #7: Ordenar Gambiarras

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Adicione opções para ordenar as gambiarras (mais recentes, mais antigas, alfabética por nome).

**Dicas:**
- Crie um `<select>` dropdown no topo da página
- Implemente funções de ordenação com `sort()`
- Re-renderize os cards quando a ordenação mudar
- Salve a preferência no `localStorage`

**Pergunte ao Copilot:**
> "@workspace Adicione um dropdown para ordenar as gambiarras por data ou nome"

---

## 🏷️ Issue #8: Tags/Categorias

**Dificuldade:** ⭐⭐⭐ Avançado

**Descrição:**
Adicione um sistema de tags para categorizar as gambiarras (CSS, JavaScript, Backend, etc).

**Dicas:**
- Modifique a estrutura do `messages.json` para incluir um array `tags`
- Crie badges coloridos para exibir as tags em cada card
- Adicione filtros clicáveis por tag
- Use cores diferentes para cada categoria

**Pergunte ao Copilot:**
> "@workspace Como adicionar um sistema de tags nas gambiarras com filtros?"

---

## 📈 Issue #9: Estatísticas do Mural

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Crie uma seção de estatísticas mostrando: total de gambiarras, contribuidor mais ativo, gambiarra mais longa, etc.

**Dicas:**
- Adicione uma seção antes ou depois do mural
- Use métodos de array como `reduce()`, `map()`, `sort()`
- Mostre dados interessantes de forma visual
- Adicione ícones ou emojis para deixar mais divertido

**Pergunte ao Copilot:**
> "@workspace Crie uma seção de estatísticas sobre as gambiarras do mural"

---

## 🎭 Issue #10: Animações de Entrada

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Adicione animações quando os cards aparecem na tela pela primeira vez.

**Dicas:**
- Use CSS animations ou transitions
- Considere usar Intersection Observer API para animar quando entram no viewport
- Adicione delays diferentes para cada card (efeito cascata)
- Experimente animações como fade-in, slide-up, ou scale

**Pergunte ao Copilot:**
> "@workspace Como adicionar animações de entrada nos cards do mural?"

---

## 🎯 Como Contribuir

1. **Escolha uma issue** que te interessa (veja a lista acima)
2. **Comente na issue** no GitHub dizendo que vai trabalhar nela
3. **Crie uma branch:** `git checkout -b feature/nome-da-feature`
4. **Use o Copilot Chat** para te ajudar: `@workspace [sua pergunta]`
5. **Teste suas mudanças** localmente
6. **Faça commit e push**
7. **Abra um Pull Request** mencionando o número da issue (ex: "Closes #1")

---

## 📊 Status das Issues

Confira a aba **Issues** no GitHub para ver quais já foram resolvidas e quais ainda estão disponíveis!

---

**Dica de Ouro:** Não tenha medo de experimentar! O Copilot está aqui para te ajudar. Se tiver dúvidas, pergunte aos instrutores! 🚀

---

## 🎵 Issue #11: Tocar Som ao Adicionar Gambiarra

**Dificuldade:** ⭐ Fácil

**Descrição:**
Adicione um efeito sonoro divertido quando uma nova gambiarra for adicionada ao mural (ao recarregar a página e detectar novos itens).

**Dicas:**
- Use a Web Audio API ou um elemento `<audio>`
- Pode usar sons gratuitos de sites como freesound.org
- Detecte quando há mais gambiarras do que na última visita (use `localStorage`)
- Adicione um botão para ligar/desligar o som

**Pergunte ao Copilot:**
> "@workspace Como adicionar um efeito sonoro quando novas gambiarras aparecem?"

---

## 🎨 Issue #12: Tema de Alto Contraste

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Adicione um terceiro tema com alto contraste para melhorar a acessibilidade.

**Dicas:**
- Crie uma opção além de claro/escuro
- Use cores com contraste WCAG AAA (preto/branco, amarelo forte/preto)
- Adicione ícones maiores e fontes mais legíveis
- Teste com ferramentas de acessibilidade do navegador

**Pergunte ao Copilot:**
> "@workspace Como implementar um tema de alto contraste acessível?"

---

## 📋 Issue #13: Copiar Gambiarra para Clipboard

**Dificuldade:** ⭐ Fácil

**Descrição:**
Adicione um botão em cada card para copiar o texto da gambiarra para a área de transferência.

**Dicas:**
- Use a Clipboard API: `navigator.clipboard.writeText()`
- Adicione um ícone de copiar (📋 ou 📄)
- Mostre feedback visual quando copiar (tooltip "Copiado!")
- Trate erros de permissão

**Pergunte ao Copilot:**
> "@workspace Como adicionar um botão para copiar o texto da gambiarra?"

---

## 🌍 Issue #14: Contador de Visitantes

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Adicione um contador simples mostrando quantas vezes a página foi visitada (usando localStorage).

**Dicas:**
- Use `localStorage` para armazenar o contador
- Incremente a cada visita
- Mostre o número no footer ou header
- Adicione um easter egg quando atingir números especiais (100, 500, 1000)

**Pergunte ao Copilot:**
> "@workspace Como criar um contador de visitas usando localStorage?"

---

## 🎪 Issue #15: Modo Confete/Celebração

**Dificuldade:** ⭐⭐⭐ Avançado

**Descrição:**
Adicione um efeito de confete/celebração quando clicar em um botão especial ou atingir um marco.

**Dicas:**
- Use canvas API ou uma biblioteca leve como canvas-confetti
- Adicione um botão "Celebrar" no header
- Anime partículas coloridas caindo pela tela
- Considere adicionar sons de celebração também

**Pergunte ao Copilot:**
> "@workspace Como criar um efeito de confete usando canvas ou bibliotecas?"

---

## 📱 Issue #16: QR Code para Compartilhar

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Gere um QR code para cada gambiarra que pode ser escaneado para compartilhar.

**Dicas:**
- Use uma biblioteca como qrcode.js ou uma API pública
- Adicione um botão "QR Code" em cada card
- Mostre o QR em um modal/popup
- O QR pode apontar para o site com um filtro/hash específico

**Pergunte ao Copilot:**
> "@workspace Como gerar QR codes para compartilhar gambiarras específicas?"

---

## 🎲 Issue #17: Gambiarra do Dia

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Destaque uma "Gambiarra do Dia" que muda diariamente (usando a data como seed).

**Dicas:**
- Use a data atual para gerar um índice "aleatório" mas consistente
- Crie uma seção especial destacada no topo
- Adicione um badge "⭐ Gambiarra do Dia"
- Use animações para chamar atenção

**Pergunte ao Copilot:**
> "@workspace Como selecionar uma gambiarra do dia usando a data como seed?"

---

## 🖼️ Issue #18: Avatares Personalizados

**Dificuldade:** ⭐⭐ Intermediário

**Descrição:**
Adicione avatares gerados automaticamente para cada contribuidor (usando serviços como DiceBear ou Boring Avatars).

**Dicas:**
- Use uma API de avatares aleatórios baseada no nome
- Exiba o avatar no canto do card
- Tente APIs como: `https://api.dicebear.com/7.x/avataaars/svg?seed=NOME`
- Cache os avatares no localStorage

**Pergunte ao Copilot:**
> "@workspace Como adicionar avatares gerados automaticamente para cada contribuidor?"

---

## 🏆 Issue #19: Sistema de Badges/Conquistas

**Dificuldade:** ⭐⭐⭐ Avançado

**Descrição:**
Crie badges especiais para contribuidores (ex: "Primeira Gambiarra", "5 Gambiarras", "Gambiarra Mais Curtida").

**Dicas:**
- Defina diferentes tipos de badges e critérios
- Mostre os badges no card do usuário
- Use ícones ou emojis para os badges: 🥇🥈🥉⭐🏆🎯
- Salve no localStorage ou calcule dinamicamente
- Crie uma página/modal de "Hall da Fama"

**Pergunte ao Copilot:**
> "@workspace Como implementar um sistema de badges para os contribuidores?"

---

## 📊 Issue #20: Gráfico de Contribuições ao Longo do Tempo

**Dificuldade:** ⭐⭐⭐ Avançado

**Descrição:**
Crie um gráfico mostrando o número de gambiarras adicionadas por data.

**Dicas:**
- Use uma biblioteca de gráficos leve como Chart.js
- Agrupe as gambiarras por data
- Crie um gráfico de barras ou linha
- Adicione em uma seção de estatísticas expandível

**Pergunte ao Copilot:**
> "@workspace Como criar um gráfico de contribuições ao longo do tempo usando Chart.js?"

---

**Quer sugerir uma nova issue?** Abra uma issue no repositório com sua ideia! 💡
