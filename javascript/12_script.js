//密碼檢驗程式

let password = 34567;
let input; //先創建叫input的變數

/*
while (input != password) {  //如果input不等於password就執行以下
  input = prompt("請輸入密碼");  //如果輸入一直錯就會迴圈一直繼續
}
alert("密碼正確"); //如果成功的話就會跳出迴圈印出此
*/

let time = 0; //輸入次數
while (input != password) {
  //如果input不等於password就執行以下
  input = prompt("請輸入密碼"); //如果輸入一直錯就會迴圈繼續
  time++; //time+1
  if (input == password) {
    //如果輸入正確就出現'登入成功'並跳出迴圈(break)
    alert("登入成功");
    break;
  } else if (time == 3) {
    //否則如果已輸入三次都錯誤就出現'密碼已錯誤三次'並跳出迴圈(break)
    alert("密碼已錯誤三次");
    break;
  } else {
    //如果以上兩個判斷都為false，就出現"密碼錯誤您只剩下3-time次機會"並繼續迴圈
    alert("密碼錯誤您只剩下" + (3 - time) + "次機會");
  }
}
