//如何使用字串、字串的用法
let word1 = "Hello\" Ms.Yu" + "Yooo";
let word2 = "Haha";
document.write(word1 + word2);
document.write("<br/>");

//計算字串長度
word1_len = word1.length;
document.write(word2.length);
document.write("<br/>");
document.write(word1_len);
document.write("<br/>");

//把字串全部轉成大寫or小寫
document.write(word1.toUpperCase());  //轉成大寫
document.write("<br/>");
document.write(word1.toLowerCase());  //轉成小寫
document.write("<br/>");

//charAt(回傳字串中的第幾位)，順序是從0為第一位
document.write(word1.charAt(1)); 
document.write("<br/>");

//indexOf('o')，回傳o在字串中第一次出現的位置
document.write(word1.indexOf('o')); 
document.write("<br/>");
document.write(word1.indexOf('p'));  //p沒有出現在字串中所以回傳-1 
document.write("<br/>");

let num = 1223;
//document.write(num.charAt(2)); =>charAt和indexOf不支援數值型態

//substring(字串中第0~4，不包括4的字)
document.write(word1.substring(0,4));