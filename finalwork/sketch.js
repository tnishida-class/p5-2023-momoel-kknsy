// 最終課題を制作しよう

function setup(){//プログラムの初期設定
  createCanvas(windowWidth,windowHeight);//ウィンドウの幅と高さに合わせたキャンバスの作成
  fill(0);//描画時のデフォルトの塗りつぶし色を黑に設定
  for(let i=0 ; i < 20; i++)//iが0から19までの20回繰り返すループ
  for(let j=0 ; j < 42; j++)//jが0から41までの42回繰り返すループ
Polygon(10,i*70,j*40,40);//Polygon関数。多角形を描画。10＝多角形の辺の数。
}


function Polygon(n, cx,cy, r){//多角形描画。辺の数＝n、中心座標（cx, cy）、半径r
  beginShape();//多角形の描画開始
  for(let i=0 ; i<5; i++){//iが0から4までの5回を繰り返すループ。
  for(let j=0; j<21; j++){//jがiから20までの21回繰り返すループ。
  noFill();//塗りつぶしなしで描画
  if(cy<i*110){stroke(200,206,300);}//条件に応じてストロークの色を変更、上下で色を変える
  else{stroke(135,206,235)};
  beginShape();//新しい多角形の描画
  for(let i=0; i<n;i++){//iが0からn-iまでのn回繰り返すループ。
  let theta = TWO_PI*i*1/n - HALF_PI;//thetaの定義。
  let x = cx + cos(theta) * r;//x座標を計算
  let y = cy + sin(theta) * r;//y座標を計算
  vertex(x,y);//多角形の頂点を追加。
  
  }
  endShape(CLOSE);//描画の終了
  }
  }
}


function draw(){
  const cx = width / 2;//キャンバスの中心のx座標、y座標
  const cy = height / 2;
  fill(100,149,237);//塗りつぶし色を指定。
  noStroke(0);//線なしで描画
  ellipse(cx, cy, 500, 120);//楕円を描画
  fill(100,149,237,);//塗りつぶし色を指定
  noStroke(0);//楕円を描画
  ellipse(cx, cy, 120, 500);//楕円を描画

  fill(255,0,0)//文字の色を指定
  textSize(28);//テキストサイズの指定
  textAlign(CENTER, CENTER);//テキストの配置を中央に指定
  text('Nishida',cx, cy);//Nishidaというテキストの描画
  drawCheckeredCircle(cx, cy, 110, 90, 4);
  drawCheckeredCircle(cx, cy, 150, 90, 3)
}

function drawCheckeredCircle(x, y, d, s, checkeSize){//チェッカーパターンを持つ円を描画する関数の定義
  push();//現在の変換行列の保存
  translate(x, y);//新しい描画位置の設定
  beginShape();//新しい図形の描画を開始
  for (let i=0; i <= s; i++){//iが0からsまでのs+1回繰り返すループ
    let theta = map(i, 0, s, 0, TWO_PI);//角度を計算
    let x = cos(theta) * d/2;//x座標を計算
    let y = sin(theta) * d/2;//y座標を計算
    if (i % 2 === 0){//偶数番目の円を白、奇数番目の円を黑で塗りつぶし。
      fill(255);
    } else {
      fill(0);
    }
    ellipse(x, y , checkeSize, checkeSize)  //楕円を描画
  }
  endShape(CLOSE);
  pop();
}