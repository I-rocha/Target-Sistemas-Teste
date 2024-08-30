// Pertence a fibonnaci
const customInput = 34;

// Não pertence a fibonnaci
// const customInput = 27;

/**
 * @param check: valor a ser verificado
 * @param n1: valor n-1 da sequencia de fibonacci
 * @param n2: valor n-2 da sequencia de fibonacci
 */
function checkFib(check, n1, n2) {
  n1 = n1 || 1;
  n2 = n2 || 0;
  const n = n1 + n2;

  if (check === n) return true;
  else if (check < n) return false;
  else return checkFib(check, n1 + n2, n1);
}

checkFib(customInput)
  ? console.log("FIB# Esse numero pertence a sequencia de fibonacci")
  : console.log("NOTFIB# Esse numero nao pertence a sequencia de fibonacci");
