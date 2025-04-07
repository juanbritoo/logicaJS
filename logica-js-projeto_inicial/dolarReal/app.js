function conversaoDolar(real) {
    return real * 4.80;
}


function mensagemInicial() {
exibirTextoNaTela('p', "Digite um valor em Dólar:");
exibirTextoNaTela('h1', "Converta um valor de Dólar para Real");
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function inserirValor() {
    let real = parseFloat(document.querySelector('input').value);
    let conversao = conversaoDolar(real);
    exibirTextoNaTela('h1', `A conversão de Dólar para Real é: R$${conversao.toFixed(2)}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
    limparCampo();
}

function limparCampo() {
    real = document.querySelector('input')
    real.value = ''
}

function botaoRefazer() {
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}


