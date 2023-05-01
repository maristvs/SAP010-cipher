const cipher = {encode, decode}


function encode(offset, mensagem) {
  let result = '';
  if (typeof mensagem !== "string" || typeof offset !== "number") {
    throw new TypeError();
  }
  for (let i = 0; i < mensagem.length; i++) {
    const executa = ((mensagem.charCodeAt(i) - 65 + offset) % 26) + 65;
    result += String.fromCharCode(executa);
  }
  return result;
}

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

export default cipher;
