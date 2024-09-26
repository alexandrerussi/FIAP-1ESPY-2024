// INPUT DA MENSAGEM DIGITADA PELO USUÁRIO <input>
let inputMessage = document.getElementById("message");

// DIV ONDE IREI EXIBIR AS MENSAGENS DO USUÁRIO E DO GEMINI
let chatLog = document.getElementById("chat-log");

// ARRAY QUE IRÁ SALVAR O HISTÓRICO DE MSGS TROCADAS COM GEMINI
let messages = [];

// FORMULÁRIO
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let messageText = inputMessage.value; // texto digitado pelo usuário
    
    let mensagemEstruturada = {
        "role": "user",
        "parts": [{"text": messageText}]
    };

    messages.push(mensagemEstruturada);
    console.log(messages);

    inputMessage.value = "";

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add("message--sent");
    messageElement.innerHTML = `
        <div class="message__text">${messageText}</div>
    `;
    chatLog.appendChild(messageElement);

    // REQUISIÇÃO PARA SUA API LOCAL!!!
    fetch("http://localhost:3000/sendMessage/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messages
        })
    });

});