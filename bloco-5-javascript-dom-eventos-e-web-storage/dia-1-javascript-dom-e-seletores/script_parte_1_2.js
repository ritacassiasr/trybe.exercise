
// 1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito
document.getElementById("page-title").innerText = "Euphoria"
// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.querySelector('#second-paragraph').innerText = "É uma série da HBO, estrelada pela atriz 'Zendaya'."
// 3. Por fim, recupere o subtítulo e altere-o também
document.querySelector('#subtitle').innerText = "Série aclamada"
// 1. Adicione uma classe igual para os dois parágrafos.
// Resposta: Adicionei a classe "para" diretamente no HTML
// 2. Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
document.getElementsByClassName(".para");
// 3. Altere algum estilo do primeiro deles.
document.getElementsByClassName('para')[0].style.color = 'green';
// 4.Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
document.getElementsByTagName('h4')[0].style.color = 'blue';