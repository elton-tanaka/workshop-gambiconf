# 🎓 Workshop: Contribuindo com Open Source usando GitHub Copilot

Bem-vindo(a)! Este repositório foi criado especialmente para o nosso workshop. Aqui, vamos aprender na prática como contribuir para um projeto Open Source, utilizando a inteligência artificial do **GitHub Copilot** para nos ajudar.

O projeto é um **Mural de Recados**. Ao final, o seu recado estará publicado junto com o de todos os outros participantes!

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

1.  Uma conta no **GitHub**.
2.  O **VS Code** instalado.
3.  A extensão do **GitHub Copilot** instalada e ativa.
4.  **Git** instalado no seu computador.

---

## 🚀 Passo a Passo: Sua Primeira Contribuição

Siga este guia detalhado. Se tiver dúvidas, levante a mão! 🙋‍♂️🙋‍♀️

### 1. Fork (Garfo) 🍴

O primeiro passo em muitos projetos Open Source é fazer uma cópia do projeto para a sua conta. Isso se chama **Fork**.

*   Clique no botão **Fork** no canto superior direito desta página.
*   Isso criará uma cópia deste repositório no **seu** GitHub.

### 2. Clone (Clonar) 📥

Agora, vamos trazer o código para o seu computador.

1.  No **seu** fork, clique no botão verde **Code**.
2.  Copie a URL (HTTPS ou SSH).
3.  Abra o seu terminal (ou Git Bash) e digite:

    ```bash
    git clone URL_QUE_VOCE_COPIOU
    cd gambiconf
    ```

### 3. Branch (Ramo) 🌿

Nunca trabalhe diretamente na `main`! Vamos criar uma branch separada para a sua contribuição.

```bash
git checkout -b recado-SEUNOME
```

*(Troque `SEUNOME` pelo seu nome ou apelido)*

### 4. Hora do Código com Copilot 🤖

Agora vem a parte divertida! Vamos adicionar seu recado.

1.  Abra o projeto no VS Code (`code .`).
2.  Navegue até a pasta `data` e abra o arquivo `messages.json`.
3.  Role até o final do arquivo (dentro dos colchetes `[]`).
4.  **Use o Copilot!**
    *   Posicione o cursor após o último recado (não esqueça da vírgula no item anterior!).
    *   Comece a digitar um comentário para invocar o Copilot ou use o Chat (`Ctrl+I` ou `Cmd+I`):

    > "Adicione um novo objeto JSON com meu nome [Seu Nome], uma mensagem de boas vindas e a data de hoje."

    *   Pressione `Tab` para aceitar a sugestão.

### 5. Testando Localmente 🧪

Antes de enviar, veja se funcionou!

1.  Abra o arquivo `index.html` no seu navegador.
    *   *Nota:* Alguns navegadores bloqueiam leitura de JSON local. Se não aparecer nada, use um servidor local.
    *   Se tiver Python: `python3 -m http.server` e acesse `http://localhost:8000`.
    *   Ou use a extensão **Live Server** do VS Code.

### 6. Commit e Push upload 📤

Salvando e enviando para o GitHub.

```bash
git add data/messages.json
git commit -m "Adiciona recado de [Seu Nome]"
git push origin recado-SEUNOME
```

### 7. Pull Request (PR) 🔀

O momento da verdade!

1.  Vá até a página do **seu** fork no GitHub.
2.  Você verá um aviso amarelo "Compare & pull request". Clique nele!
3.  Verifique se as mudanças estão corretas.
4.  Escreva um título e descrição para o seu PR.
    *   *Dica:* Use o Copilot na descrição do PR para resumir o que você fez!
5.  Clique em **Create pull request**.

---

## 💡 Dicas de Prompts para o Copilot

Experimente perguntar essas coisas para o Copilot Chat durante o workshop:

*   `@workspace Como esse projeto carrega as mensagens na tela?`
*   `Explique o que o arquivo css/style.css está fazendo com as cores dos cards.`
*   `Como eu posso melhorar a acessibilidade do index.html?`

---

## 🆘 Precisa de ajuda?

Se algo der errado:

1.  Verifique se você colocou a **vírgula** `,` depois do objeto anterior no JSON.
2.  Confira se fechou as chaves `{}` e colchetes `[]` corretamente.
3.  Chame um dos instrutores!

**Bom workshop!** 🚀
