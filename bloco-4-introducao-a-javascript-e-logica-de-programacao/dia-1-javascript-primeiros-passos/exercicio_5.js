// 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let x = -5
let y = 100
let z = 15

let somaAngulos = x + y + z
let angulosPositivos = x > 0 && y > 0 && z > 0;

if(angulosPositivos){
    if (somaAngulos === 180) {
console.log("Temos um triangulo");
} else {
    console.log("Não temos um triangulo");
};
} else console.log("error")
