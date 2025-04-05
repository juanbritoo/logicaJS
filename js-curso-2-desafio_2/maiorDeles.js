function numeroMaior (num1, num2, num3){
    return alert(`O número maior é ${maior}`);
}
let num1 = parseInt(prompt("Escolha um número:"))
let num2 = parseInt(prompt("Escolha outro número:"))    
let num3 = parseInt(prompt("Escolha um outro número:"))

let maior = num1;
if (num1 < num2) {
    maior = num2;
}
if (num2 < num3) {
    maior = num3;
}

//ao invés de fazermos através de if, nos podemos usar o comando Math.max, que irá nos trazer o maior número

numeroMaior(maior);