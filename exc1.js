const numero = parseInt(prompt("Informe um número:"));

let a = 0, b = 1;
let pertence = false;

while (a <= numero) {
  if (a === numero) {
    pertence = true;
    break;
  }
  let proximo = a + b;
  a = b;
  b = proximo;
}

if (pertence) {
  alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
