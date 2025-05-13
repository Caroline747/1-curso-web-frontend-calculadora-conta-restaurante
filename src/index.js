// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

let desconto = 0;
let input = 0; // Inicializando a variável input


if (metodoPagamento.toLowerCase() === 'cartão') {
    desconto = 0; // Sem desconto para cartão
    input = readline.prompt();
    console.log('Você escolheu o método de pagamento: ' + metodoPagamento);
    console.log('Você não receberá desconto na conta.');
}
else if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
    desconto = 0.1; // 10% de desconto
    input = readline.prompt();
    console.log('Você escolheu o método de pagamento: ' + metodoPagamento);
    console.log('Você receberá um desconto de 10% na conta.');
} 

  



