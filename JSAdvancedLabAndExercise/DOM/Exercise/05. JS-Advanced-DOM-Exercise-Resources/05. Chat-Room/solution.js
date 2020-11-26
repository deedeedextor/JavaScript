function solve() {
  let chatRoom = document.getElementById("chat_messages");
  let input = document.getElementById("chat_input");
  let button = document.getElementById("send");

  button.addEventListener('click', function () {
    let myMessage = document.createElement('div');
    myMessage.classList.add('message');
    myMessage.classList.add('my-message');

    myMessage.innerHTML = input.value;
    chatRoom.appendChild(myMessage);

    input.value = '';
  });
}
