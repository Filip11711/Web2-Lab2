function addMessage() {
    const newMessageInput = document.getElementById('messageInput');
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    
    const protection = document.getElementById('Checkbox');
    const isProtected = protection.checked;

    let newMessage = "";

    if (isProtected) {
        newMessage = escapeHtml(newMessageInput.value);
    } else {
        newMessage = newMessageInput.value;
    }

    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));

    updateMessageList();
    newMessageInput.value = '';
}

function clearMessages() {
    localStorage.removeItem('messages');
    updateMessageList();
}

function updateMessageList() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = messages.map(message => `<li class='msg'>${message}</li>`).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}

updateMessageList();