let spacing = 80; // 每組圖形之間的間距
let baseColor;
let rotationAngle = 0; // 初始旋轉角度

function setup() {
  createCanvas(windowWidth, windowHeight); // 設置畫布填滿螢幕
  background(255); // 設置白色背景
  noFill(); // 圓形和方形無填充
  textAlign(CENTER, CENTER);
  textSize(64); // 設定文字大小
  
  // 設置基礎色系
  baseColor = color(150, 150, 255);
}

function draw() {
  background(255); // 重設背景為白色

  // 從左上角 (0, 0) 開始繪製空心的方形和圓形組合
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      
      // 計算滑鼠與該圖形的距離
      let d = dist(mouseX, mouseY, x, y);

      // 根據距離調整大小和透明度
      let sizeOffset = map(d, 0, width / 2, 20, 5);
      let alpha = map(d, 0, width / 2, 150, 50);

      // 設定筆劃顏色和透明度
      stroke(baseColor.levels[0], baseColor.levels[1], baseColor.levels[2], alpha);
      strokeWeight(2); // 設置線條粗細

      // 繪製空心方形
      rect(x, y, spacing - sizeOffset, spacing - sizeOffset);
      
      // 繪製空心圓形
      ellipse(x, y, (spacing - sizeOffset) * 0.6);
    }
  }

  // 根據滑鼠位置來計算旋轉角度
  let angle = atan2(mouseY - height / 2, mouseX - width / 2); // 計算滑鼠與畫布中心的角度

  // 繪製旋轉的文字 "CZH"
  push();
  translate(width / 2, height / 2); // 移動到畫布中心
  rotate(angle); // 旋轉文字
  fill(255); // 設置文字顏色為白色，形成簍空效果
  stroke(0); // 設置文字邊框為黑色
  strokeWeight(2); // 設置邊框粗細
  text('CZH', 0, 0); // 顯示文字
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時自適應
}
