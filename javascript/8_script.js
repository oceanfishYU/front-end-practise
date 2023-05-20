//if判斷式

//let hungry = prompt("你現在餓嗎?");
/*
if(hungry=="餓"){
    document.write("去吃飯");
}
else if(hungry=="還好"){
    document.write("等一下再去吃");
}
else{
    document.write("不要吃");
}
*/

//if hungry(=true)就執行以下
let hungry = true;
if (hungry){
    document.write("去吃飯");
}
document.write("</br>");


let rainy = false;
if (rainy){
    document.write("我今天開車去上班");
}
else{
    document.write('我今天走路去上班');
}
document.write("</br>");


//如果上面的判斷成立的話下面的判斷就不會繼續了
let score = 65;
if (score==100){
    document.write('我給你1000元');
}
else if (score>=80){
    document.write("我給你500元");
}
else if(score>=60){
    document.write("我給你300元");
}
else{
    document.write('你給我100元');
}
document.write("</br>");


//&&是a且b的意思(ab的判斷式都為true)
let wind=true , sun=false;
if (wind==false && sun==true){
    document.write('晴天');
}
else if (wind==true && !sun){  // !sun=>sun==flase
    document.write("陰天");
}
else{
    document.write('多雲時晴');
}
document.write("</br>");


// ||是或者的意思(a或b判斷式其中一個為true)
let money=90 ; wallet=200;
if (money>100 || wallet>150){
    document.write('錢夠');
}
else{
    document.write('錢不夠');
}
document.write("</br>");


//  !是反面的意思
let a=5,b=10;
if (a!=3 || b==3){
    document.write('其中一個數字不對');
}
document.write("</br>");

//函式搭配if
function maxnum(num1,num2,num3){
    if (num1>num2 && num1>num3){
        return num1;
    }
    else if (num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}

max=maxnum(10,12,8);
document.write(max);
//document.write(maxnum(10,11,8));