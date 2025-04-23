function gerarEscolha() {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    const indice = Math.floor(Math.random() * opcoes.length);
    return opcoes[indice];
  }
  
  module.exports = { gerarEscolha };
  