let resultado = "reprovada"

switch (resultado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada!")
        break;

    case "lista":
        console.log("Você está na lista de espera")
        break;

    case "reprovada":
        console.log("Você foi reprovado(a)")
        break;

    default:
        console.log("não se aplica")
}