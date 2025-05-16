// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


// Aplicando o desconto apenas para PIX ou DINHEIRO
let valorComDesconto = valorTotal;

    if (metodoPagamento.toLowerCase() === 'pix' || metodoPagamento.toLowerCase() === 'dinheiro') {
    valorComDesconto = valorTotal - (valorTotal * 0.1);
    input = readline.prompt();

    console.log(`O valor total é: R$ ${valorComDesconto.toFixed(2)}`);
}
    



 

  



