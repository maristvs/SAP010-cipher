// Importa o objeto 'cipher' do arquivo 'cipher.js'
import cipher from './cipher.js';

// Define a função 'cifrarMensagem' para cifrar a mensagem
function cifrarMensagem() {
  const mensagem = document.getElementById('mensagem').value.trim();
  const chave = parseInt(document.getElementById('chave').value);
    // Cifra a mensagem utilizando a função 'encode' do objeto 'cipher' com a chave fornecida
  const mensagemCifrada = cipher.encode(chave, mensagem);
  document.getElementById('mensagem-cifrada').innerText = mensagemCifrada;
}
// Aqui está o elemento HTML do botão de cifrar com o id 'btn-cifrar'
const btnCifrar = document.getElementById('btn-cifrar');
// Adiciona um ouvinte de evento de clique ao botão de cifrar que chama a função 'cifrarMensagem'
btnCifrar.addEventListener('click', cifrarMensagem);  

// Define a função 'decifrarMensagem' para decifrar a mensagem
function decifrarMensagem() {
  const mensagemCifrada = document.getElementById('input-decifrar').value.trim();
  const chave = parseInt(document.getElementById('chave1').value);
  const mensagemDecifrada = cipher.decode(chave, mensagemCifrada);
  document.getElementById('resultado-decifragem').innerText = mensagemDecifrada;
}
// E aqui está o elemento HTML do botão de cifrar com o id 'btn-decifrar'
const btnDecifrar = document.getElementById('btn-decifrar');
btnDecifrar.addEventListener('click', decifrarMensagem);
