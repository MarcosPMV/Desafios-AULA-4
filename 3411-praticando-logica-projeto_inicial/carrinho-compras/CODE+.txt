let totalGeral;
limpar()

function adicionar() {
// recupera valores, nome do produto, quantidade e valor.
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
// calcular o preço.
let preço = valorUnitario * quantidade;
// adicionar o produto no carrinho.
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;
totalGeral = totalGeral + preço;
// atualizar o valor total.
let campoTotal = document.getElementById ('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
quantidade = document.getElementById('quantidade').value ='';
}

function limpar(){
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '' ;
document.getElementById ('valor-total').innerHTML = 'R$ 0';
}
// Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida.
// Se a entrada não for válida, exiba uma mensagem de erro apropriada.

