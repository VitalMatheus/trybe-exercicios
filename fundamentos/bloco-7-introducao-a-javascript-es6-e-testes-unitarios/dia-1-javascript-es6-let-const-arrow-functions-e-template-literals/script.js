// Parte 1
// Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

console.log(`Os número em ordem ficam: ${sortOddsAndEvens()}`); // será necessário alterar essa linha 😉

// Parte 2
// Exercicio 1

const factorial = number => {
  let result = 1;
  for (let i=2; i<=number; i+=1){
    result *= i;
  }
  return result;
}

console.log(factorial(6));

// Exercicio 2

const longestWord = (text) => {
  let arr = text.split (' ');
  let aux = 0;
  let result = '';

  for (const word of arr){
    if (word.length > aux){
      aux = word.length
      result = word;
    }
  }
  return result;
}

console.log(longestWord("Walking the street tonight alone in a river of darkness"))

