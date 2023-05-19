//製作一個問答程式

//創建叫做qustions的陣列，裡面存放三個物件
let questions = [
  {
    prompt: "香蕉是甚麼顏色\n(a)紅色\n(b)綠色\n(c)黃色",
    answer: "c",
  },
  {
    prompt: "草莓是甚麼顏色\n(a)紅色\n(b)綠色\n(c)黃色",
    answer: "a",
  },
  {
    prompt: "一公分等於幾公尺\n(a)50\n(b)0.1\n(c)100",
    answer: "b",
  },
];

let score = 0;
//for(i=0; 如果i<questions陣列的長度迴圈就繼續; 每次迴圈最後i+1)
for (let i = 0; i < questions.length; i++) {
  let input = prompt(questions[i].prompt); //input=輸入(輸入提示:questions陣列中第i項(地i個物件)中key為prompt的value)
  if (input == questions[i].answer) {
    score++;
    alert("回答正確");
  } else {
    alert("回答錯誤");
  }
}
alert("你總共答對" + score + "題"); //score是數值，但是數值與字串相加，數值會被轉為字串
