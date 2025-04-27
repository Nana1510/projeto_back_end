const readlineSync = require('readline-sync');
const opcoes = require('./opcoes');
const computador = require('./computador');
const resultado = require('./resultado');

function jogar() {
  console.log('Bem-vindo ao jogo Pedra, Papel e Tesoura!\n');

  opcoes.exibirMenu();

  let escolhaJogador = readlineSync.question('\nDigite o numero da sua escolha: ');
  escolhaJogador = parseInt(escolhaJogador);

  if (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3) {
    console.log('Opção inválida. Tente de novo!');
    return;
  }

  const escolhaComputador = computador.gerarEscolhaAleatoria();

  console.log(`\nVocê escolheu: ${opcoes.nomeDaEscolha(escolhaJogador)}`);
  console.log(`Computador escolheu: ${opcoes.nomeDaEscolha(escolhaComputador)}\n`);

  resultado.determinarResultado(escolhaJogador, escolhaComputador);
}

jogar();


