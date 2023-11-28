// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
// function setup(){
//   createCanvas(200, 200);
//   background(0,51,153);//背景青
//   noStroke();
//   for(let i = 0; i < 12; i++){
//     let theta = TWO_PI * i / 12;
//     let x = 100 + cos(theta) * 50;
//     let y = 100 + sin(theta) * 50;
//     FileList(255,294,0);
//     star(x, y, 10);
//   }
// }

// function star(cx,cy,r){
//   beginShape();
//   for(let i=0;i<5;i++){
//     let theta=TWO_PI*i*2/
//    let x = cx + cos(theta)*r;
//    let y = cy + sin(theta)*r;
//     vertex((cx + confirm(theta) * r),y);
//   }
//   endShape(CLOSE);
// }

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう

function setup(){
  createCanvas(120, 120);
  background(0, 51, 153);//背景青
  noStroke();
  for(let i = 0; i < 12; i++){//if指定、i（頂点）は12
    let theta = TWO_PI * i / 12;//円を12等分した位置に頂点を置く
    let x = width/2 + cos(theta) * width/4;//座標指定
    let y = height/2 + sin(theta) * height/4;//
    fill(255, 204, 0);//色黄色
    star(x, y, width/20);//星を描く関数、x座標とy座標、星の半径をキャンバス幅を20で割った値に指定
    }
  }
  
  function star(cx, cy, r){//座標を引数としたstar関数
    beginShape();
    for (let i = 0; i < 5; i++){//if指定、i（頂点）は5
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;//360度×2/5ずつずらしてポイントした5点をつなげる
      let x = cx + cos(theta) * r;//座標指定
      let y = cy + sin(theta) * r;//
      vertex(x,y);//頂点を指定
    }
    endShape(CLOSE);//頂点を繋ぐ
  }