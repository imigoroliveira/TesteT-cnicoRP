const texto = prompt("Informe uma string para verificação:");

let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] === 'a' || texto[i] === 'A') {
    contador++;
  }
}

if (contador > 0) {
  console.log(`A letra 'a' aparece ${contador} vez(es) na string.`);
} else {
  console.log("A letra 'a' não foi encontrada na string.");
}