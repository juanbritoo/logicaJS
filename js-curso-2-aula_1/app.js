let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//Função para gerar o número aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;
    

if (quantidadeDeElementos == numeroLimite) {
    listaDeNumerosSorteados = [];
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
 }

 //Função para exibir texto na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

mensagemInicial(); //Chama a função para exibir a mensagem inicial na tela


//Função para exibir e verificar o chute!
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto); //Verdadeiro ou Falso
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'O Número secreto é menor que o Chute!');
            exibirTextoNaTela('p', 'Tente Novamente... Escolha um número entre 1 e 100');
        } else {
            exibirTextoNaTela('h1', 'O Número secreto é maior que o Chute!');
            exibirTextoNaTela('p', 'Tente Novamente... Escolha um número entre 1 e 100');
        } 
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
}


console.log(numeroSecreto);