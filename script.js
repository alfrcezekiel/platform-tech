function sendMessages(){
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if(message !== ""){
        const chatMessages = document.getElementById("chat-messages");
        const newMessages = document.createElement("div");

        newMessages.classList.add("message", "outgoing");
        newMessages.textContent = message;
        chatMessages.appendChild(newMessages);

        messageInput.value = "";
        messageInput.focus();

        setTimeout(sendReply, 1000);
    }
}

function sendReply(){
    const chatMessages = document.getElementById("chat-messages");
    const replyMessages = document.createElement("div");

    replyMessages.classList.add("message", "incoming");
    replyMessages.textContent = "This is a sample reply";
    chatMessages.appendChild(replyMessages);
}