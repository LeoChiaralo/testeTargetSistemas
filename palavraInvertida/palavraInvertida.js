let palavraInvertida = "";
const palavra = prompt("Informe uma palavra: ");

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

alert(palavraInvertida);
