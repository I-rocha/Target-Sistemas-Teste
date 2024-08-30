const data = [
  { state: "SP", val: 6783643 },
  { state: "RJ", val: 3667866 },
  { state: "MG", val: 2922988 },
  { state: "ES", val: 2716548 },
  { state: "outros", val: 1984953 },
];

// Soma dos valores do vetor
const sum = (data) =>
  data.reduce((v1, v2) => {
    return v1 + v2.val;
  }, 0);

// Cria um objeto com a participacao do peso de cada estado
const weight = (data) => {
  const tot = sum(data);

  const ans = data.map((el) => {
    return {
      state: el.state,
      percent: Number(100 * (el.val / tot).toFixed(3)),
    };
  });
  return ans;
};

weight(data).forEach((el) => {
  console.log(`${el.state}: ${el.percent}%`);
});
