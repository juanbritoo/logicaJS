function calcularIMC(altura, peso) {
    altura = parseFloat(altura);
    peso = parseFloat(peso);
    return peso / (altura * altura);  
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Calcule o seu IMC');
    exibirTextoNaTela('p', 'Digite abaixo suas informações de Peso e Altura');
}

function pegadaDeDados() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let imcCorporal = calcularIMC(altura, peso);

    if (imcCorporal < 18.5) {
        exibirTextoNaTela('p', "De acordo com a OMS, seu IMC é considerado: Magreza");
    } else if (imcCorporal > 18.5 && imcCorporal < 24.9) {
        exibirTextoNaTela('p', "De acordo com a OMS, seu IMC é considerado: Normal");
    } else if (imcCorporal > 24.9 && imcCorporal < 30) {
        exibirTextoNaTela('p', "De acordo com a OMS, seu IMC é considerado: Sobrepeso");
    } else if (imcCorporal >= 30) {
        exibirTextoNaTela('p', "De acordo com a OMS, seu IMC é considerado: Obesidade");
    }

    document.getElementById('reiniciar').removeAttribute('disabled');
    exibirTextoNaTela('h1', `Seu IMC Corporal é: ${imcCorporal.toFixed(2)}`);
    limparCampo();
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    altura = document.getElementById('altura');
    altura.value = '';
    peso = document.getElementById('peso');
    peso.value = '';
}

function botaoRefazer() {
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}