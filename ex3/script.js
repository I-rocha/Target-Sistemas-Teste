const fs = require("fs");

const json = fs.readFileSync(`${__dirname}/dados.json`);

const data = JSON.parse(json);

// Comparadores entre dois valores
const minOfTwo = (v1, v2) => (v1 < v2 ? v1 : v2);
const maxOfTwo = (v1, v2) => (v1 > v2 ? v1 : v2);

// Mínimo
const min = data.reduce(
  (minValue, curr) => minOfTwo(minValue, curr.valor),
  Number.POSITIVE_INFINITY
);

// Mínimo sobre os dados não nulo
const minNormalized = data
  .filter((el) => el.valor)
  .reduce(
    (minValue, curr) => minOfTwo(minValue, curr.valor),
    Number.POSITIVE_INFINITY
  );

// Máximo
const max = data.reduce((maxValue, curr) => maxOfTwo(maxValue, curr.valor), 0);

// Total
const sum = data.reduce((acc, curr) => acc + curr.valor, 0);

// Média sobre dados não nulo
const avg = sum / data.filter((el) => el.valor).length;

// Dias acima da média
const overAverage = data
  .filter((el) => el.valor)
  .filter((el) => el.valor > avg);

console.log(`Minimo mensal: ${min.toFixed(2)}`);
console.log(`Minimo mensal (não nulo): ${minNormalized.toFixed(2)}`);
console.log(`Maximo mensal ${max.toFixed(2)}`);
console.log(`Quantidade de dias acima da media: ${overAverage.length}`);
