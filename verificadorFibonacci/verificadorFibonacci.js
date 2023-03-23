let n1 = 0,
  n2 = 1,
  n3 = 1;
let number = parseInt(prompt("Digite um número para a verificação: "));

while (number > n3) {
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}

if (number === n1) {
  alert("O número " + number + " faz parte da sequência de Finonacci.");
} else if (number === n3) {
  alert("O número " + number + " faz parte da sequência de Finonacci.");
} else {
  alert("O número " + number + " não faz parte da sequência de Finonacci.");
}
