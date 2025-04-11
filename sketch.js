function setup() { //設定函數，設定初始值得地方
  //建立視窗的高與寬當作畫布的寬高 
  createCanvas(windowWidth, windowHeight);//創建畫布
  //設定顏色模式為HSB
  colorMode(HSB);
  // 設定背景顏色為黑色
  background(0);
}

function draw() { //畫圖函數，畫圖的地方
  // 根據滑鼠的 X 軸位置計算色相，範圍從 0 到 360
  let hue = map(mouseX, 0, windowWidth, 0, 360);

  // 根據滑鼠的 Y 軸位置計算亮度，範圍從 0 到 100
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓的顏色
  fill(hue, 100, brightness); // HSB格式
  noStroke(); // 不要邊框

  // 在滑鼠位置畫一個圓，圓的寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗的大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 重新設定背景顏色為黑色
  background(0);
}
