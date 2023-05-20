//輸入
let my_name = prompt("請輸入你的名字");
let my_age = prompt("請輸入你的年紀");
document.write("你好啊"+ my_name + "你今年" + my_age + "歲" );
document.write("</br>");
document.write("</br>");

//製作基本計算機
//prompt輸入的不管甚麼都會預設為字串而非數值
let num1 = prompt("請輸入第一個數字");
let num2 = prompt("請輸入第二個數字");
document.write("因prompt預設為字串所以相加為直接串接:"+num1+num2); //這樣他會直接字串連接在一起
document.write("<br/>")

num1 = parseInt(num1) //轉為整數
num2 = parseFloat(num2) //轉為浮點數
document.write(num1+num2);