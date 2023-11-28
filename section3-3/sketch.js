// テキスト「キーボード操作に反応する」
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;//円の中心
  y = height / 2;
}



function draw() {
  background(160, 192, 255);
  ellipse(x, y, 50); //円を描く
  if (keyIsDown(LEFT_ARROW)) { x -= 5; } //左に動かす
  if (keyIsDown(RIGHT_ARROW)) { x += 5; } //右に動かす
  if (keyIsDown(UP_ARROW)) { y -= 5; } //上に動かす
  if (keyIsDown(DOWN_ARROW)) { y += 5; } //下に動かす
  
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}