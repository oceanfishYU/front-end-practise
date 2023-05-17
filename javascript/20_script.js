//製作部落格
let title = document.getElementById("title");
let content = document.getElementById("content");
let btn_up = document.getElementById("btn_up");
let btn_delete = document.getElementById("btn_delete");
let btn_clear = document.getElementById("btn_clear");
let list = document.getElementById("list");

console.log(btn_up);
console.log(title);

let num = 1; //為了指定刪除某篇id用的
btn_up.addEventListener("click", function () {
  //list元素底下的HTML
  //``是模板語法，讓我們可以直接在裡面寫js的東西${}
  //直接使用字串的話無法直接換行，要全部擠在同一行，也無法直接寫js程式
  list.innerHTML =
    list.innerHTML +
    `
    <div class="article" id="no${num + 1}"> 
      <h1>第${num + 1}篇</h1>
      <h2>${title.value}</h2>
      <p>${content.value}</p>
      <hr />
    </div>
    `;
  title.value = "";
  content.value = "";
  console.log(list.innerHTML);
  num++; //每發布一篇就num就+1
});

//如果刪除鈕被按下
btn_delete.addEventListener("click", function () {
  number = prompt("請輸入要刪除第no幾"); //先輸入你要刪除no幾(文章的id)
  let id_is = document.getElementById("no" + number); //取得id="no"+number的元素
  console.log(id_is);
  id_is.innerHTML = ""; //把這個元素的HTML改成空字串
});

//如果刪除鈕被按下
btn_clear.addEventListener("click", function () {
  list.innerHTML = ""; //id=list的HTML元素全部變成空字串
});
