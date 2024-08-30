const strInput = "Inverter os caracteres dessa string de entrada";

function reverse(strInput) {
  // Gera array a partir da string
  const arr = strInput.split("");
  const reversed = [];

  arr.forEach((el) => {
    // Insere caracteres ao final do vetor
    reversed.unshift(el);
  });
  return reversed.join("");
}

console.log(`String original:\n${strInput}\n`);
console.log(`String invertida:\n${reverse(strInput)}`);
