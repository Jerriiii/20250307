function setup() { //設定函數，設定初始值得地方
    //建立視窗的高與寬當作畫布的寬高 
     createCanvas(windowWidth, windowHeight);//創建畫布
     //設定背景顏色
     background("#bde0fe");
   }
   
   function draw() { //畫圖函數，畫圖的地方
     //設定畫筆的顏色
     background("#bde0fe");
     fill("#006d77");//設定填滿的顏色
     stroke("#ffb703");//設定畫筆的顏色
     strokeWeight(10);//設定畫筆的粗細
     //在視窗的中間畫一個圓，圓的寬高為200
     //ellipse(windowWidth/2, windowHeight/2, 200, 200);
     //依照上面的圓顏色與框線顏色，聰視窗的最左邊，產生連續的圓，到視窗的最右邊
     for(let i=0; i<windowWidth+200; i+=200){
       ellipse(i, windowHeight/2, 200, 200);
     }
    
   }
   //當視窗的大小改變時，重新設定畫布的寬高
   function windowResized() {
     resizeCanvas(windowWidth, windowHeight);
   }
   