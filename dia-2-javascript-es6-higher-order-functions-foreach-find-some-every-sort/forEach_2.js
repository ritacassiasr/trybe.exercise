// Encontre o primeiro número que seja divisível por 5 em uma lista de números.

// usando o for e if:

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
/* let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50
 */ 
// Usando o find:

const firstMultipleOf5 = numbers.find((number) => number % 5 === 0); 

console.log(firstMultipleOf5);
