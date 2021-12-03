//colocar todos os coments em ingles
//é necessário dividir isto por varios ficheiros
//é necessário colocar nuvens em cima das ilhas e inimigos
//é necessário fazer uma pagina inicial com um botao start, pagina home.js
//organização mapa da jogo (em papel)
//é necessário fazer o nível extra

//screen siize
const screenx = 600;
const screeny = 600;

//island positions
//zona 1
const ax1 = [150, 225];
const ay1 = [0, 75];
//zona 1.1
const ax11 = [0, 75];
const ay11 = [150];
//zona 2
const ax2 = [375, 450, 525];
const ay2 = [0, 75, 150];
//zona 3
const ax3 = [0, 75];
const ay3 = [450, 525];
//zona 4
const ax4 = [300, 375, 450];
const ay4 = [375, 450, 525];

//enemy positions
//zona 1
const bx1 = [300];
const by1 = [0, 75, 150, 225];
//zona 2
const bx2 = [0, 75];
const by2 = [225, 300, 375];
//zona 3
const bx3 = [150, 225];
const by3 = [375, 450, 525];
//zona 4
const bx4 = [375, 450, 525];
const by4 = [225, 300];
//zona 5
const bx5 = [150, 225];
const by5 = [150, 225];
//zona 6
const bx6 = [525];
const by6 = [375, 450];

//intial postion boat
let px = 0;
let py = 0;

//images
let boat;
let island;
let enemy;

function setup() {
  var canvas = createCanvas(screenx, screeny);
  canvas.position(0, 50);
  console.log("its working");

  //load images
  boat = loadImage("boat.png");
  island = loadImage("island.png");
  enemy = loadImage("enemy.png");

  //islands - gives random values to x and y
  rx1 = random(ax1);
  ry1 = random(ay1);
  rx11 = random(ax11);
  ry11 = random(ay11);
  rx2 = random(ax2);
  ry2 = random(ay2);
  rx3 = random(ax3);
  ry3 = random(ay3);
  rx4 = random(ax4);
  ry4 = random(ay4);

  //enemies - gives random values to x and y
  ex1 = random(bx1);
  ey1 = random(by1);
  ex2 = random(bx2);
  ey2 = random(by2);
  ex3 = random(bx3);
  ey3 = random(by3);
  ex4 = random(bx4);
  ey4 = random(by4);
  ex5 = random(bx5);
  ey5 = random(by5);
  ex6 = random(bx6);
  ey6 = random(by6);

  //islands - estas posições devem ser guardadas na base de dados
  console.log("ilha 1: " + rx1 + "," + ry1);
  console.log("ilha 11: " + rx11 + "," + ry11);
  console.log("ilha 2: " + rx2 + "," + ry2);
  console.log("ilha 3: " + rx3 + "," + ry3);
  console.log("ilha 4: " + rx4 + "," + ry4);

  //estas posições devem ser guardadas na base de dados
  console.log("inimigo 1: " + ex1 + "," + ey1);
  console.log("inimigo 2: " + ex2 + "," + ey2);
  console.log("inimigo 3: " + ex3 + "," + ey3);
  console.log("inimigo 4: " + ex4 + "," + ey4);
  console.log("inimigo 5: " + ex5 + "," + ey5);
  console.log("inimigo 6: " + ex6 + "," + ey6);
}

function draw() {
  //background color
  background(0);
  background(212, 241, 249);

  //Displays 5 island randomly not in the 1st, 2nd sqaures, in future change to FOR
  image(island, rx1, ry1, 75, 75);
  image(island, rx11, ry11, 75, 75);
  image(island, rx2, ry2, 75, 75);
  image(island, rx3, ry3, 75, 75);
  image(island, rx4, ry4, 75, 75);

  //grid 8X8
  for (var x = 0; x < width; x += width / 8) {
    for (var y = 0; y < height; y += height / 8) {
      stroke(0, 0, 156);
      strokeWeight(1.5);

      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }

  //Displays 6 island randomly not in the 1st, 2nd sqaures, in future change to FOR
  image(enemy, ex1, ey1, 75, 75);
  image(enemy, ex2, ey2, 75, 75);
  image(enemy, ex3, ey3, 75, 75);
  image(enemy, ex4, ey4, 75, 75);
  image(enemy, ex5, ey5, 75, 75);
  image(enemy, ex6, ey6, 75, 75);

  //Displays the image boat
  image(boat, px, py, 75, 75);

  //text Goal ou colocar a imagem de uma meta
  stroke(0);
  fill(150 + sin(frameCount * 0.1) * 100);
  stroke(0);
  textSize(31);
  text("Goal", 527, 595);
}

function keyPressed() {
  //console.log(px + 25);
  //console.log(py + 25);
  if (px < 475) {
    if (keyCode === RIGHT_ARROW) {
      px = px + 75;
    }
  }
  if (px > 25) {
    if (keyCode === LEFT_ARROW) {
      px = px - 75;
    }
  }
  if (py > 25) {
    if (keyCode === UP_ARROW) {
      py = py - 75;
    }
  }
  if (py < 475) {
    if (keyCode === DOWN_ARROW) {
      console.log(py + 25);
      py = py + 75;
    }
  }
}

function hitEnemy(){
  //se o barco estiver na posição e do inimigo,
  //o jogo acaba
  //aparece uma janela, jogar de novo ou sair para o menu inicial
  let a = createA('home.js', 'you lost click here');
  a.position(0, 0);
}
function hitIsland(){
  //aparece a uma tela com start nível bónus 
  //depois aparece a ilha para coletar as moedas 
  //depois volta ao jogo
}

