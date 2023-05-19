// 物件object
// 可以存放很多key(鍵) & value(值)

//定義一個叫person的物件
let person = {
  name: "Joan", //存放一個字串"Joan"並給他一個名字叫name
  age: 22, //存放一個數字22並給他一個名字叫age
  is_female: true, //存放一個布林值true並給他一個名字叫is_female

  //物件裡也可以放函式，注意:function後面不用再取名
  print_name: function () {
    document.write(this.name); //this代表這個函式是屬於這個person這個物件的，所以this.name=person.name
  },

  //物件內的函式也能給予值和回傳值
  add: function (num1, num2) {
    return num1 + num2;
  },
};

document.write(person); //印出[object Object]=>跟我們說person是一個物件
document.write("</br>");
document.write(person.name); //要取出資料就是物件名稱.資料的key
document.write("</br>");
document.write(person.age);
document.write("</br>");
document.write(person.is_female);
document.write("</br>");
person.print_name();
document.write("</br>");
document.write("</br>");

document.write(person.add(10, 20));
document.write("</br>");
number = person.add(3, 4);
document.write(number);

//其實javascript中的所有東西都能看成物件
// 例document.write() =>write是document這個物件裡的一個函式
