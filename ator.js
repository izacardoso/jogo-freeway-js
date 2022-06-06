//ator
let xAtor = 95;
let yAtor = 365;

let pontos = 0;

function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,30,30)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-=3
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeMover()){
      yAtor+=3
    }
    
  }
}

function verficaColisao(){
  for(let i=0; i<imagemCarros.length;i=i+1){
    colisao=collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor, yAtor,15)
    if(colisao){
      posisaoInicial()
      somDaColisao.play()
      if(pontos>0){
        pontos-=1
      }
    }
  }
} 
function posisaoInicial(){
  yAtor=366;
}
  
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(pontos, width/5,27);
}

function marcaPontos(){
  if(yAtor<15){
    pontos+=1
    somDosPontos.play()
    posisaoInicial()
  }
  
}

function podeMover(){
  return yAtor<366
}
