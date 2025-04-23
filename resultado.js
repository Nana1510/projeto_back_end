function verificarResultado(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
      return 'Empate!';
    }
  
    if (
      (escolhaUsuario === 'Pedra' && escolhaComputador === 'Tesoura') ||
      (escolhaUsuario === 'Papel' && escolhaComputador === 'Pedra') ||
      (escolhaUsuario === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
      return ' Parabéns.Você ganhou!';
    } else {
      return 'Que pena.Você perdeu!';
    }
  }
  
  module.exports = { verificarResultado };