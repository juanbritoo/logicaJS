//Declaração da função, onde o 'calcularMedia' recebe os parametros vindos das variáveis do prompt.
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
 }
//Declaração de números através de variaveis
let num1 = parseFloat(prompt('Escolha o primeiro número'));
let num2 = parseFloat(prompt('Escolha o segundo número'));
let num3 = parseFloat(prompt('Escolha o terceiro número'));

//Exibição do comando
alert(`A média dos números é ${calcularMedia(num1, num2, num3)}`);