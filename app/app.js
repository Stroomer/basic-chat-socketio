import { io } from 'https://cdn.socket.io/4.8.1/socket.io.esm.min.js';

const socket = io('ws://localhost:3500');

function sendMessage(e) {
  e.preventDefault();
  const input = document.querySelector('input');
  if (input.value) {
    socket.emit('message', input.value);
    input.value = '';
  }
  input.focus();
}

document.querySelector('form').addEventListener('submit', sendMessage);

// Listen for messages
socket.addEventListener('message', (data) => {
  const li = document.createElement('li');
  li.textContent = data;
  document.querySelector('ul').appendChild(li);
});
