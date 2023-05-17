//event listener(事件監聽器):幫我們監聽網頁上的一舉一動

//第一種:直接寫在html的寫法
function handle_click0() {
  alert("你按了按鈕");
}

function handle_click1(element) {
  console.log(element); //把取得的東西印在console
  element.innerText = "你按了"; //把這個按鈕的文字改成你按了
  element.style.color = "red";
}

//第二種:完全寫在javascript裡面

let btn_a = document.getElementById("btn0"); //取得id為btn0的元素
console.log(btn_a);
//addEventListener對這個元素做監聽，要傳入兩個參數(要監聽甚麼事件,處發後要做甚麼事)
btn_a.addEventListener("click", function () {
  //監聽按下事件，然後執行函式
  alert("你按了按鈕3");
});

let btn_b = document.getElementById("btn1"); //取得id為btn1的元素
console.log(btn_b);
btn_b.addEventListener("click", function () {
  //監聽按下事件，然後執行函式
  this.innerText = "你按了按鈕4";
  this.style.color = "orange";
});

let img1 = document.getElementById("img1"); //取得id為img1的元素
//對img1元素做監聽(事件:滑鼠滑到這個元素,動作:執行函式)
img1.addEventListener("mouseover", function () {
  this.src = "19_image_2.jpg"; //此時this=img1這個元素，把img1的圖片改為19_image_2.jpg
});

//對img1元素做監聽(事件:滑鼠滑出這個元素,動作:執行函式)
img1.addEventListener("mouseout", function () {
  this.src = "19_image_1.jpg";
});

//按下按鈕使遊戲王卡攻守轉換
let img2 = document.getElementById("img2"); //取得id為img2的元素
let btn_image = document.getElementById("btn3"); //取得id為btn3的元素
console.log(btn_image);

//對btn_image元素做監聽(事件:按下按鈕,動作:執行函式)
btn_image.addEventListener("click", function () {
  //如果此時btn_image這個元素的文字事"轉成防守的話"
  if (btn_image.innerText == "轉成防守") {
    this.innerText = "轉成進攻"; //this=btn_image，把btn_image的文字改成轉為進攻
    img2.src = "19_image_2.jpg"; //把img2的圖片改為19_image_2.jpg
  }
  //如果此時btn_image這個元素的文字事"轉成進攻的話"
  else if (btn_image.innerText == "轉成進攻") {
    this.innerText = "轉成防守";
    img2.src = "19_image_1.jpg";
  }
});
