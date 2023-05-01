import cipher from './cipher.js';

function cifrarMensagem() {
  const mensagem = document.getElementById('mensagem').value.trim();
  const chave = parseInt(document.getElementById('chave').value);
  const mensagemCifrada = cipher.encode(chave, mensagem);
  document.getElementById('mensagem-cifrada').innerText = mensagemCifrada;
}

const btnCifrar = document.getElementById('btn-cifrar');
btnCifrar.addEventListener('click', cifrarMensagem);

function decifrarMensagem() {
  const mensagemCifrada = document.getElementById('input-decifrar').value.trim();
  const chave = parseInt(document.getElementById('chave1').value);
  const mensagemDecifrada = cipher.decode(chave, mensagemCifrada);
  document.getElementById('resultado-decifragem').innerText = mensagemDecifrada;
}

const btnDecifrar = document.getElementById('btn-decifrar');
btnDecifrar.addEventListener('click', decifrarMensagem);
