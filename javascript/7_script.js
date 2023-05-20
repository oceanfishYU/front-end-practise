//函式 function

//定義名為hello的函式
function hello(){
    document.write("你好");
}
hello(); //呼叫函式
document.write("</br>");


//hello_name(name)，name代表我們需要傳入資訊給他
function hello_name(name){
    document.write("你好" + name);
}
hello_name("Joan"); //把Joan傳入函式內
document.write("</br>");


//把xyz相加的函式
function plus(x,y,z){
    document.write(x+y+z);
}
plus(2,2,5);
document.write("</br>");


//把num1/num2的值回傳
function division(num1,num2){
    return num1/num2;  //num1/num2會蓋過原本的呼叫
    document.write("你好"); //此行程式碼不會被運行，因為函式碰到return就會把值回傳後直接跳出來了
}

//diviSsion(5,2)=2.5
document.write(division(5,2));
document.write("</br>");
answer = division(5,2);  //可以用變數answer把函式division=5/2的回傳值存起來
document.write(answer+3);  //5.5
document.write("</br>");
document.write("</br>");


//把ab相加的函式
function add(a,b){
    document.write(a+b);
    document.write("</br>");
    return 20; //return才是最後回傳的值跟上面無關了
}
value = add(2,2); 
document.write(value);
