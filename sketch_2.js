let angle =0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER) //畫方形以中心點為座標
  noFill() //方形部填滿顏色
  angleMode(DEGREES) //設定角度的單位0~360
  //frameRate(10)  //每秒進入draw()函數的次數
}

function draw() {
  background(0); 
  //translate(width/2,height/2) //原點移到視窗中心點
  for(let y=0;y<height;y=y+120){
  for(let x=0;x<width;x=x+100){
    push()
    translate(x,y)
    stroke(255)
  for(let i=0;i<10;i=i+1){
  let r = map (sin(frameCount),-1,1,50,255)
  let g = map (cos(frameCount/2),-1,1,50,255)
  let b = map (sin(frameCount/4),-1,1,50,255)
  stroke(r,g,b)
  rotate(angle)  //把物件旋轉10度的角度，以原點(0,0) 為基準點
  rect(0,0,100-i*3,100-i*3,20) //畫一方形，在視窗中間，寬與高為600
  angle = sin(frameCount)* 30
  }
  pop()
}
}
}