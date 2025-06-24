
function comprar() {
let ingresso = document.getElementById('tipo-ingresso');
let quantidade = parseInt(document.getElementById('qtd').value);
alert(ingresso.value);
alert(quantidade.value);

if (ingresso.value == 'pista') {
    compraPista(quantidade);

} 
}

function compraPista(quantidade){
let qtdPista = parseInt(document.getElementById ('qtd-pista').textContent);
if (quantidade > qtdPista.textContent){
    alert ('Quantidade indisponível para tipo pista');
} else {
    qtdPista = qtdPista = quantidade;
    qtdPista.textContent = qtdPista;
alert ('compra realizada com sucesso!');
}
}
