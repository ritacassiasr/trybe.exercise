// 3. Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três constantes com os valores que serão comparados.

const a = 8
const b = 10
const c = 2

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else console.log(c)