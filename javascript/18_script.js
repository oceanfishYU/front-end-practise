//如何取得html元素

//document是window這個全域物件底下的一個物件/屬性，負責處理跟操作html裡面的東西
//getElementById("header")=取得元素ById(html中Id為'header'的標籤內的元素)
let h1 = document.getElementById("header");
console.log(h1); //console.log可以幫我們把想要顯示的東西印在console裡面(F12->console)
h1.innerText = "我不是Joan"; //改變h1的字
h1.style.backgroundColor = "gray"; //把h1的背景改成灰色
h1.style.color = "orange"; //把h1的文字改成橘色

let a = document.getElementById("link");
console.log(a);
a.href = "https://amazon.com"; //把Id為link的a標籤內的href改成amazon的網站。此時雖然文字一樣是google的網站但點進去已不是

let b = document.getElementById("link2");
console.log(b);
b.innerText = "https://www.youtube.com";
b.href = "https://www.youtube.com";
