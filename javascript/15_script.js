// 2維陣列、巢狀迴圈
let number = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];

document.write(number[0]);
document.write("</br>");
document.write(number[0][0]); //第1行第1列=1
document.write("</br>");
document.write(number[3][0]); //第3行第1列=0
document.write("</br>");
document.write("</br>");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    document.write("i=" + i + " , j=" + j);
    document.write("</br>");
  }
}
document.write("</br>");
document.write("</br>");

//第一層:for(i=0; 如果i<number陣列的長度迴圈就繼續; 每次迴圈最後i+1)
for (let i = 0; i < number.length; i++) {
  //第二層:for(j=0; 如果j<number陣列第[i]個陣列(也就是number第i行)的長度迴圈就繼續; 每次迴圈最後j+1)
  for (let j = 0; j < number[i].length; j++) {
    document.write(number[i][j]); //印出number陣列中第[i]行第[j]列
  }
  //第二層跳出後印出換行後第一層迴圈才會開始下一次
  document.write("</br>");
}
