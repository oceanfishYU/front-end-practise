//window 是一個全域的物件，代表我們全部的瀏覽器

// window.prompt("請輸入");  //prompt也是window底下的一個函式
document.write("哈囉0");
document.write("</br>");
window.document.write("哈囉1"); //document也是window底下的一個函式

var a = 123;
let b = 345;
document.write("</br>");
window.document.write(window.a); //變數也是window底下的
document.write("</br>");
window.document.write(window.b); //會是undefined

//因為window是全域的物件，所有東西都在window底下所以可以省略
