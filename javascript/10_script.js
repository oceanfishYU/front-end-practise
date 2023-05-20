// 利用物件表達真實世界的東西

//創建一個叫movie的物件表達現實中的電影
let movie = {
  title: "捍衛戰士：獨行俠",
  country: "美國",
  duration: 130,
  actors: [
    //存有三個物件的陣列存放起來並叫做actors
    //因為演員有好幾個所以用陣列存
    {
      //用多個物件把演員資料一個個存起來
      name: "Tom Cruise",
      age: 60,
      is_male: true,
    },
    {
      name: "Miles Teller",
      age: 36,
      is_male: true,
    },
    {
      name: "Jennifer Lynn Connelly",
      age: 52,
      is_male: false,
    },
  ],
};

document.write("電影的名稱:" + movie.title);
document.write("</br>");
document.write("電影的片長:" + movie.duration + "分鐘");
document.write("</br>");
document.write(movie.actors);
document.write("</br>");
document.write(movie.actors[0].name); //從movie物件中找到key為actors的資料(value)，並把裡面的陣列中第0個(物件)中key為name的value印出
document.write("</br>");
document.write(movie.actors[2].is_male);
