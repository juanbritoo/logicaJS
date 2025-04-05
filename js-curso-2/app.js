let nuemroSecreto = gerarNuemeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do Número Screto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == nuemroSecreto);    
}

function gerarNuemeroAleatorio() {
   return parseInt(Math.random() * 100 + 1);
}