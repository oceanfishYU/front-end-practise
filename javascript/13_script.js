//for迴圈

let i = 0;
while (i < 10) {
  document.write(i);
  document.write("<br/>");
  i++;
}
document.write("<br/>");

//for(i=0; 如果i<10迴圈就繼續; 每次迴圈最後i+1)
for (let i = 0; i < 10; i++) {
  document.write(i);
  document.write("<br/>");
}
document.write("<br/>");

//使用for取出陣列的值
let students = ["小黑", "小黃", "小紅"];
//for(i=0; 如果i<students陣列的長度迴圈就繼續; 每次迴圈最後i+1)
for (let i = 0; i < students.length; i++) {
  document.write("學生" + (i + 1) + ":" + students[i] + " ");
}
