function encodeAndDecodeMessages() {
    let encodeBtn = document
    .querySelectorAll('button')[0];
    let decodeBtn = document
    .querySelectorAll('button')[1];
    let messageInput = document
    .querySelectorAll('textarea')[0];
    let messageOutput = document
    .querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', () => {
        let message = messageInput.value;
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            encodedMessage += String
            .fromCharCode(ascii(`${message[i]}`) + 1);
        }
        messageInput.value = '';
        messageOutput.value = encodedMessage;
    });

    decodeBtn.addEventListener('click', () => {
        let message = messageOutput.value;
        let decodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            decodedMessage += String
            .fromCharCode(ascii(`${message[i]}`) - 1);
        }
        messageOutput.value = decodedMessage;
    });
    
    function ascii(a) {
        return a.charCodeAt(0);
    }
}