function numeroFatorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1 ) return 1;
    return n *numeroFatorial(n-1);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function calcular() {
    let n = parseInt(document.querySelector('input').value);
    let resultado = numeroFatorial(n);
    exibirTextoNaTela('h1', `O resultado é: ${resultado}`);
    limparCampo();
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function calcularOutroNum() {
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirTextoNaTela('h1', 'Calcule outro número Fatorial' )

}


