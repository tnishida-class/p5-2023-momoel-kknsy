// テキスト「リサイズするプログラムを作る」
let size=50
let count=0;
let cycle=100;
let increment=1;
function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);//背景
  count=(count+increment)%cycle;//円を小さくしたり大きくしたりする
  if (keyIsPressed){//キー入力と共に鼓動の入力を倍にする
    increment=2;//キー入力したときに倍になるようにする
  }else{//それ以外＝キー入力していない時
    increment=1;
  }
  if(count<cycle/2){//countが周期の半分未満の時は円を大きくし、半分以上の時は円を小さくする
    size=count+50;//円を大きくする
  }else{//半分以上の時
    size=(cycle-count)+50;//円を小さくする
  }
    ellipse(width/2, height/2,size);//円を描く
  }
