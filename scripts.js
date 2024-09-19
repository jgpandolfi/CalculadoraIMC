// Identifica e seleciona os elementos do DOM (HTML)
const formContainer = document.getElementById('form-container'); // Tag <form> toda
const pesoInput = document.getElementById('peso'); // Campo input de peso
const alturaInput = document.getElementById('altura'); // Campo input de altura
const labelResultadoImc = document.getElementById('label-valor-imc'); // Tag <p> da label que antecede o resultado do IMC
const labelResultadoFaixa = document.getElementById('label-faixa-imc'); // Tag <p> da label que antecede o resultado da faixa
const resultadoImc = document.getElementById('valor-imc'); // Tag <p> para o valor número do IMC calculado
const resultadoFaixa = document.getElementById('faixa-imc'); // Tag <p> para a faixa do IMC calculado

// Identifica e seleicone elemento do DOM (CSS) para estilizar cor da faixa atribúida ao IMC
const elementoRoot = document.documentElement;

// Função para realizar o cálculo do valor do IMC do usuário
function calcularIMC (peso, altura) {
    valorIMC = (peso / (altura * altura)).toFixed(2);
    return valorIMC;
}

// Função para atribuir a pessoa a uma faixa de IMC conforme o valor do IMC calculado
function atribuirFaixa (imc) {
    let faixaImc;
    switch (true) {
        case (imc < 18.5):
            faixaImc = "Abaixo do peso";
            break;
        case (imc >= 18.5 && imc < 24.9):
            faixaImc = "Peso normal";
            break;
        case (imc >= 25 && imc < 29.9):
            faixaImc = "Sobrepeso";
            break;
        case (imc >= 30):
            faixaImc = "Obesidade"
            break;
        default:
            faixaImc = "Valor inválido!";
            break;
    }
    return faixaImc;
}

// Função para estilizar as cores do resultado do IMC calculado e da faixa atribúida para o IMC
function estilizarFaixaImc(imc) {
    let corParaFaixa;
    switch (true) {
        case (imc < 18.5):
            corParaFaixa = "#FF0000";
            break;
        case (imc >= 18.5 && imc < 24.9):
            corParaFaixa = "#45A049";
            break;
        case (imc >= 25 && imc < 29.9):
            corParaFaixa = "#FF0000";
            break;
        case (imc >= 30):
            corParaFaixa = "#540000"
            break;
        default:
            corParaFaixa = "#333";
            break;
    }
    elementoRoot.style.setProperty('--cor-faixa-imc', corParaFaixa)
}

// Evento do clique - o que acontece quando o botão submit é clicado
function eventoSubmit (event) {
    // Impede que o formulário seja enviado ao servidor
    event.preventDefault();

    // Obtém os valores atuais dos campos de peso e altura
    let peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);

    // Chama a função para calcular o valor do IMC com base nos valores encontrados
    let imc = calcularIMC(peso, altura);

    // Chama a função para atribuir uma faixa ao IMC calculado
    let faixaImc = atribuirFaixa(imc);

    // Altera os valores no DOM
    resultadoImc.textContent = imc;
    resultadoFaixa.textContent = faixaImc;
    labelResultadoImc.hidden = false;
    resultadoImc.hidden = false;
    labelResultadoFaixa.hidden = false;
    resultadoFaixa.hidden = false;

    // Chama a função para estilizar as cores conforme a faixa do IMC (CSS)
    estilizarFaixaImc(imc);
}

// Adicionar uma escuta ao evento de clique no botão "submit" da calculadora
formContainer.addEventListener('submit', eventoSubmit);
