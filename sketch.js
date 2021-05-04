//var nivelDificuldade = Number(window.prompt("Qual a dificuldade do gosto você gostaria de jogar? Responda de 1 a 9."));

var nivelDificuldade = 3;

var largura = 600;
var altura = 400;

var corTabuleiro = "#AEF5E2";

var corBolinha = 0;
var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 20;

var velocidadeXBolinha = nivelDificuldade * 2;
var velocidadeYBolinha = nivelDificuldade * 2;

var aRaquete = 150;
var lRaquete = 10;
var vRaquete = nivelDificuldade * 1.5;

var yRaqueteEsquerda = ((altura/2) - (aRaquete/2));
var yRaqueteDireita = ((altura/2) - (aRaquete/2));

var xRaqueteEsquerda = 10;
var xRaqueteDireita = largura - xRaqueteEsquerda - lRaquete;

var pontosEsquerda = 0
var pontosDireita = 0

function setup() {
createCanvas(largura, altura);
}

function criarTabuleiro(corTabuleiro){
background(corTabuleiro);
}

function criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha){
circle(xBolinha, yBolinha, dBolinha);
fill(corBolinha);
}

function criarRaquete(xRaquete, yRaquete, lRaquete, aRaquete){
rect(xRaquete, yRaquete, lRaquete, aRaquete);
}

function movimentarBolinha(){
xBolinha = xBolinha + velocidadeXBolinha;
yBolinha = yBolinha + velocidadeYBolinha;
}

function movimentarRaqueteEsquerda(){
if (keyIsDown(87)){
if(yRaqueteEsquerda >= 0){
yRaqueteEsquerda = yRaqueteEsquerda - vRaquete;
}
}
if (keyIsDown(83)){
if (yRaqueteEsquerda <= (altura - aRaquete)){
yRaqueteEsquerda = yRaqueteEsquerda + vRaquete;
}
}
}

function movimentarRaqueteDireita(){
if (keyIsDown(UP_ARROW)){
if(yRaqueteDireita >= 0){
yRaqueteDireita = yRaqueteDireita - vRaquete;
}
}
  
if (keyIsDown(DOWN_ARROW)){
if (yRaqueteDireita <= (altura - aRaquete)){
yRaqueteDireita = yRaqueteDireita + vRaquete;
}
}
}

function verificarColisaoBolinhaParede(){
if (xBolinha >= (largura - (dBolinha/2)) || xBolinha < (dBolinha/2)){
velocidadeXBolinha = -1 * velocidadeXBolinha
}
                                         
if (yBolinha >= (altura - (dBolinha/2)) || yBolinha < (dBolinha/2)){
velocidadeYBolinha = -1 * velocidadeYBolinha
}
}

function verificarColisaoBolinhaRaqueteEsquerda(){
if (xBolinha - (dBolinha/2) <= xRaqueteEsquerda + lRaquete &&
yBolinha - (dBolinha/2) <= yRaqueteEsquerda + aRaquete &&
yBolinha + (dBolinha/2) >= yRaqueteEsquerda){
velocidadeXBolinha = velocidadeXBolinha * -1
velocidadeYBolinha = -1 * velocidadeYBolinha
pontosEsquerda = pontosEsquerda + 1

}
}

function verificarColisaoBolinhaRaqueteDireita(){
if (xBolinha + (dBolinha/2) >= xRaqueteDireita - lRaquete &&
yBolinha - (dBolinha/2) <= yRaqueteDireita + aRaquete &&
yBolinha + (dBolinha/2) >= yRaqueteDireita){
velocidadeXBolinha = velocidadeXBolinha * -1
velocidadeYBolinha = -1 * velocidadeYBolinha
pontosDireita = pontosDireita + 1
}
}

function incluirPlacar(){
textSize(22);
text("Player 1: "+ pontosEsquerda + " | Player 2: " + pontosDireita, (largura/2)-110, 22);
}

function draw() {
criarTabuleiro(corTabuleiro);
incluirPlacar();
criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha);
movimentarBolinha();
verificarColisaoBolinhaParede();
criarRaquete(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete);
criarRaquete(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete);
movimentarRaqueteEsquerda();
movimentarRaqueteDireita();
verificarColisaoBolinhaRaqueteEsquerda();
verificarColisaoBolinhaRaqueteDireita();
}