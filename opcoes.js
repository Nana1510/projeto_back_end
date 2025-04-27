const opcoes = ['Pedra', 'Papel', 'Tesoura'];

function exibirMenu() {
  console.log('Escolha uma das opções:');
  console.log('1 - Pedra');
  console.log('2 - Papel');
  console.log('3 - Tesoura');
}

function nomeDaEscolha(indice) {
  return opcoes[indice - 1]; // pega o nome certo baseado no número
}

module.exports = { exibirMenu, nomeDaEscolha };
