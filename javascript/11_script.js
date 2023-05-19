//while迴圈

//先判斷如果i<3那迴圈就繼續執行以下程式
let i = 1;
while (i < 3) {
  document.write(i + " ");
  i++; //=>i=i+1
}
document.write("</br>");

//先執行程式再判斷如果a<6那迴圈就繼續
let a = 6;
do {
  document.write(a + " "); //因為先執行程式所以即使a>6也會印出
  a++; //a此時=7
} while (a < 6); //結束一圈迴圈後才判斷a有沒有>6，此時a=7所以跳出迴圈
