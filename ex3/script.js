const fs = require("fs");

const json = fs.readFileSync(`${__dirname}/data.json`);

const data = JSON.parse(json);

const sum = (data) => {
  const summed = data.reduce((v1, v2) => {
    // Previne campos vazios
    v1 = v1 || 0;
    v2 = v2 || 0;
    return v1 + v2;
  }, 0);
  return summed;
};

const min = (data) => Math.min(...data);

const max = (data) => Math.max(...data);

const overAverageDay = function (data) {
  // Filtra dados nulos ou invalidos
  const normalized = data.filter((el) => !!el);

  const avg = sum(normalized) / normalized.length;
  const daysVal = normalized.filter((el) => el > avg);

  return daysVal.length;
};

console.log(`Minimo mensal: ${min(data).toFixed(2)}`);
console.log(`Maximo mensal ${max(data).toFixed(2)}`);
console.log(`Quantidade de dias acima da media: ${overAverageDay(data)}`);
