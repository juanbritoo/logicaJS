let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleButton() {
    console.log('O botão foi clicado');
}

function alertButton() {
    alert('O botão foi clicado');
} 

function promptButton() {
    let cidade = prompt('Me fale o nome de alguma cidade do Brasil');
    alert(`Eu estive em ${cidade} recentemente e lembrei de você!`);
}

function somaButton() {
    let num1 = parseInt(prompt('Escolha o primeiro número para a soma!'));
    let num2 = parseInt(prompt('Escolha o segundo número para a soma!'));
    let resultado = num1 + num2;
    alert(`O resultado da soma dos dois números é: ${resultado}`);
}