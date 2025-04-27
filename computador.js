function gerarEscolhaAleatoria() {
  // Gera um número aleatório entre 1 e 3
  return Math.floor(Math.random() * 3) + 1;
}

module.exports = { gerarEscolhaAleatoria };
  