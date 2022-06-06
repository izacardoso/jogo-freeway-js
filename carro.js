let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,270,318];
let velocidadeCarros = [2.1,2.5,3,4.3,5,2.7]
let colisao = false;
let comprimentoCarro=50
let alturaCarro=40

function mostraCarro(){
  for(let i = 0; i<imagemCarros.length; i=i+1){
  image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro)
  }
}

function movimentacarro(){
  for( let i = 0; i<imagemCarros.length; i=i+1)
  xCarros[i]-= velocidadeCarros[i]
}

function carroInfinito(){
  for (let i = 0; i<imagemCarros.length; i=i+1){
    if(carroPassouATela(xCarros[i])){
    xCarros[i]=600;
    }
  }
}

function carroPassouATela(xCarros){
  return xCarros <-50
}

