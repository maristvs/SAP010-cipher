// Define um objeto chamado 'cipher' que contém as funções 'encode' e 'decode'
const cipher = { encode, decode }

// Define a função 'encode' que recebe um deslocamento (offset) e uma mensagem inserida
function encode(offset, mensagem) {
  let result = '';
    // Verifica se o tipo da mensagem não é uma string ou se o tipo do offset não é um número
  if (typeof mensagem !== "string" || typeof offset !== "number") {
        // Lança um erro do tipo TypeError caso a verificação acima seja verdadeira
    throw new TypeError();
  }
   // Percorre cada caractere da mensagem
  for (let i = 0; i < mensagem.length; i++) {
    const executa = ((mensagem.charCodeAt(i) - 65 + offset) % 26) + 65;
    result += String.fromCharCode(executa);
  }
  return result;
}
// Define a função 'decode' que recebe um deslocamento (offset) e uma mensagem cifrada
function decode(offset, mensagemCifrada) {
  let result = "";
  if (typeof mensagemCifrada !== "string" || typeof offset !== "number") {
    throw new TypeError();
  }
  for (let i = 0; i < mensagemCifrada.length; i++) {
    const executar = ((mensagemCifrada.charCodeAt(i) - 90 - offset) % 26) + 90;
    result += String.fromCharCode(executar);
  }
  return result;
}
// Exporta o objeto 'cipher'para que possa ser importado em outros arquivos
export default cipher;
