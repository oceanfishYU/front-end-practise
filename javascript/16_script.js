//class物件的模板

//class後面接著模板名稱，模板名稱通常開頭為大寫
class Phone {
  //constructor是一個初始的函式，把我們傳入的值賦予給實體物件
  constructor(number, year, is_waterproof) {
    this.number = number; //把傳入的number賦予給物件，key為number，value為傳入的值
    this.year = year; //把傳入的year賦予給物件，key為year，value為傳入的值
    this.is_waterproof = is_waterproof; //把傳入的is_waterproof(布林值)賦予給物件，key為is_waterproof，value為傳入的值
  }
  //函式直接寫就好
  phone_age() {
    return 2023 - this.year;
  }
}

//創建一個叫phone1的物件並且套用Phone模板
let phone1 = new Phone("123", 2022, false); //new Phone(號碼,年份,是否防水)
let phone2 = new Phone("456", 2018, false);
document.write(phone1.number);
document.write("</br>");
document.write(phone2.year);
document.write("</br>");
document.write(phone2.phone_age());

/*
let phone1 = {
  numner: "123",
  year: 2022,
  is_waterproof: false,
  phone_age: function () {
    return 2023 - this.year;
  },
};

let phone2 = {
  numner: "456",
  year: 2018,
  is_waterproof: false,
  phone_age: function () {
    return 2023 - this.year;
  },
};

let phone3 = {
  numner: "789",
  year: 2015,
  is_waterproof: true,
  phone_age: function () {
    return 2023 - this.year;
  },
};
*/
