function retangulo(altura, largura) {
    largura = parseFloat(largura);
    altura = parseFloat(altura);
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return {area: area, perimetro: perimetro};
}
   
function calculo() {
    altura = prompt("Insira o valor da altura");
    largura = prompt("Insira o valor da largura")
    let resultado = retangulo(altura, largura);
    alert(`Área: ${resultado.area} Perímetro: ${resultado.perimetro}`);
}
calculo();