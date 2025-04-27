function determinarResultado(jogador, computador) {
  if (jogador === computador) {
    console.log('Deu empate!');
  } else if (
    (jogador === 1 && computador === 3) ||
    (jogador === 2 && computador === 1) ||
    (jogador === 3 && computador === 2)
  ) {
    console.log('Você ganhou!');
  } else {
    console.log('O computador ganhou!');
  }
}

module.exports = { determinarResultado };
