let totalGeral;
function adicionar(){
// recupera valores, nome do produto, quantidade e valor.
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

console.log (produto, nomeProduto, valorUnitario, quantidade);
// calcular o preço.
let calcular = valorUnitario * quantidade;
console.log (calcular)
// adicionar o produto no carrinho.
let listaProdutos = document.getElementById('lista-produtos');
listaProdutos.innerHTML = listaProdutos.innerHTML + `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>`;
totalGeral = totalGeral + calcular;

// atualizar o valor total.
let valorTotal = document.getElementById('valor-total');
valorTotal.innerHTML = `R$ ${totalGeral}`
quantidade = document.getElementById('quantidade').value = '';
}

function limpar() {
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '' ;
document.getElementById ('valor-total').innerHTML = 'R$ 0';
}

// Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida.
// Se a entrada não for válida, exiba uma mensagem de erro apropriada.

