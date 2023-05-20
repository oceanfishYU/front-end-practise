// Javascript基本資料型態與&變數 
//字串
"Joan"

//數字
22
22.4

//布林值
true
false


//變數
//只能是英文大小寫或數字或$或_的組合
//開頭不能是數字
let my_name='Joan' //創建一個叫my_name的變數並把'Joan'放進去
let my_age=22
let is_female = true

//字串與變數串接用+
document.write(my_name);
document.write(my_age);
document.write("<br/>")
document.write(is_female);
document.write("<br/>");
document.write("我叫余瓊紋");
document.write("<br/>");
document.write("我的英文名字是" + my_name);
document.write("<br/>");
document.write(my_name + "今年22歲");
document.write("</br>")
document.write("</hr>")

my_age = 21;
number = 20;
document.write(my_name  + my_age); //字串與數值用+會串接起來
document.write("</br>");
document.write(my_age + number);  //數值與數值用+會進行運算
document.write("</br>");
my_age = "22歲";
document.write("我的年紀是"+my_age);