//如何使用數字、數字的用法

document.write(1+2);
document.write("</br>");
document.write(1+2*5);
document.write("</br>");
document.write((1+2)*5);
document.write("</br>");
document.write("</br>");

let num1=10, num2=25; //一次設立多個變數
document.write(num2/num1);
document.write("</br>");
document.write(num2%num1); // %是取餘數的意思
document.write("</br>");
document.write("</br>");

//parseInt是取整數
document.write(parseInt(5/2)); //=2
document.write("</br>");
document.write("</br>");

//Math.ceil是向上取整數
document.write(Math.ceil(5/2)); //=3
document.write("</br>");
document.write("</br>");


//Math.abs是取絕對值
let num3 = -7;
document.write(Math.abs(num3));
document.write("</br>");
document.write("</br>");

 //Math.max是找最大值
document.write(Math.max(1,2,5,6,num1,num2,num3,999));
document.write("</br>");

//Math.min是找最小值
document.write(Math.min(1,2,5,6,num1,num2,num3,999));
document.write("</br>");
document.write("</br>");

//Math.round是四捨五入
document.write(Math.round(99.5));
document.write("</br>");
document.write(Math.round(99.4));
document.write("</br>");
document.write("</br>");

//Math.pow(x的,y次方)
document.write(Math.pow(2,3)); //2的3次方
document.write("</br>");
document.write("</br>");

//Math.sqrt(要開根號的數字)
document.write(Math.sqrt(36)); //2的3次方
document.write("</br>");
document.write("</br>");

//Math.sqrt(要開根號的數字)
document.write(Math.sqrt(36)); //2的3次方
document.write("</br>");
document.write("</br>");

//隨機數
document.write(Math.random()); //回傳0~1的隨機一個數
document.write("</br>");
document.write(Math.round(Math.random()*10)); //把random隨機的數*10後再四捨五入
