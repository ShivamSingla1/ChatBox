const socket=io()

let name="Shivam"
let textArea=document.querySelector('#text');
let messageArea=document.querySelector('.message_area');

function appendMessage(msg, type) {
  let main=document.createElement('div');
  main.classList.add(type,'message');
  let markup=`
  <h4>${msg.user}</h4>
  <p>${msg.message}</p>
  `
  main.innerHTML=markup;
  messageArea.appendChild(main);
}

function sendMessage(message) {
  let msg ={
    user: name,
    message:message
  }

  appendMessage(msg,'outgoing');

  socket.emit('message', {
    user:name,
    message:message
  })
}

textArea.addEventListener('keyup', (e) => {
  if(e.key==='Enter') {
    sendMessage(e.target.value);
    e.target.value = '';
  }
});
