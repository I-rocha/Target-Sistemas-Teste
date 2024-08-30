const strInput = "Inverter os caracteres dessa string de entrada";

function reverse(strInput) {
  const arr = strInput.split("");
  const reversed = [];
  arr.forEach((el) => {
    reversed.unshift(el);
  });
  return reversed.join("");
}

console.log(`String original:\n${strInput}\n`);
console.log(`String invertida:\n${reverse(strInput)}`);
