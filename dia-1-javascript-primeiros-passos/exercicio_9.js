// 9. Escreva um programa que defina três números em constantes e 
// retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const x = 10
const y = 8
const z = 4

if (x % 2 !== 0 || y % 2 !== 0 || z % 2 !== 0) {
    console.log("true")
} else console.log("false")