function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentacarro();
  movimentaAtor();
  carroInfinito();
  verficaColisao();
  incluiPontos();
  marcaPontos();
}



