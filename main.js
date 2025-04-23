const opcoes = require('./opcoes');
const computador = require('./computador');
const resultado = require('./resultado');


function jogar() {
  console.log(`Seja Bem-Vindo ao jogo de Pedra,Papel e Tesoura!!\n`)
  console.log('Escolha uma opção abaixo: \n');
  console.log('1 - Pedra \n');
  console.log('2 - Papel \n');
  console.log('3 - Tesoura \n');

  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Digite o número da sua escolha: ', (resposta) => {
    const escolhas = ['Pedra', 'Papel', 'Tesoura'];
    const escolhaUsuario = escolhas[parseInt(resposta) - 1];

    if (!escolhaUsuario) {
      console.log('Opção inválida. Tente novamente.');
      readline.close();
      return;
    }

    const escolhaComputador = computador.gerarEscolha();

    console.log(`Você escolheu: ${escolhaUsuario}`);
    console.log(`Computador escolheu: ${escolhaComputador}`);

    const resultadoJogo = resultado.verificarResultado(escolhaUsuario, escolhaComputador);
    console.log(resultadoJogo);

    readline.close();
  });
}


jogar();