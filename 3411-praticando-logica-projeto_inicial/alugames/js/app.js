let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
        confirmarAcao()
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
        confirmarAcao()
    }


    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function confirmarAcao() {
  if (confirm("Você tem certeza que deseja continuar?")) {
    alert("Ação confirmada!");
  } else {
    alert("Ação cancelada.");
  }
 }












//No projeto Alugames, uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída.
// Isso pode ajudar a evitar devoluções acidentais.
//No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
//Crie um programa que verifica se uma palavra ou frase é um palíndromo.
//Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
