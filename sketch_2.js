function setup() { //設定函數，設定初始值得地方
    //建立視窗的高與寬當作畫布的寬高 
    createCanvas(windowWidth, windowHeight);//創建畫布
    //設定背景顏色
    background("#bde0fe");
  }
  
  function draw() { //畫圖函數，畫圖的地方
    background("#bde0fe"); //設定畫筆的顏色
  
    // 根據滑鼠的 X 軸位置計算大小，範圍從 100 到 500
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    // 設定每個形狀之間的間距
    let spacing = size + 20;
  
    // 畫一整排的方框和圓
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        // 畫方框
        fill("#006d77");//設定填滿的顏色
        stroke("#ffb703");//設定畫筆的顏色
        strokeWeight(10);//設定畫筆的粗細
        rect(x - size / 2, y - size / 2, size, size);
  
        // 畫圓
        fill("#fb6f92");//圓的顏色
        ellipse(x, y, size, size);
      }
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  