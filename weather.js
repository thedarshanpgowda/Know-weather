document.addEventListener("DOMContentLoaded", () => {
  //https://api.openweathermap.org/data/2.5/weather?q=hassan&appid=054e02b01529615a099fa7329c030a80
  const url = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "&appid=054e02b01529615a099fa7329c030a80&units=metric";
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const snowfall = `<img src="snowfall.png" alt="">`;
  const storm = `<img src="storm.png" alt="">`;
  const sun = `<img src="sun.png" alt="">`;
  const tornado = `<img src="tornado.png" alt="">`;
  const cloudy = `<img src="cloudy.png" alt="">`;
  const fully_cloud = `<img src="fully_cloud.png" alt="">`;
  const night = `<img src="night.png" alt="">`;
  const overcast = `<img src="overcast.png" alt="">`;
  const sleet = `<img src="sleet.png" alt="">`;
  const Partlycloudy = `<img src="Partlycloudy.png" alt="">`;
  const rainy = `<img src="rainy.png" alt="">`;
  const partlyrain = `<img src="partlyrain.png" alt="">`;
  const windy = `<img src="windy.png" alt="">`;

  const weather = async (city) => {
    let response = await fetch(url + city + apiKey);
    let data = await response.json();
    console.log(data);
    // console.log(data.main);
    let k = data.main.temp.toFixed(1);
    let date = new Date();
    document.querySelector("#Actualtemperature").innerHTML = `${k}&deg;C `;
    document.querySelector("#humid").innerHTML = `${data.main.humidity}% `;
    document.querySelector(
      "#message"
    ).innerHTML = `${data.weather[0].description} `;
    document.querySelector(
      "#Cloudmessage"
    ).innerHTML = `${data.weather[0].description} `;
    document.querySelector("#wind").innerHTML = `${data.wind.speed}km/h `;
    document.querySelector("#place").innerHTML = `${data.name} `;
    document.querySelector("#day").innerHTML = `${day[date.getDay()]}`;
    document.querySelector("#date").innerHTML = `${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
    const pics = document.querySelector(".blockforImaage");
    if (k > 20) {
      pics.innerHTML = `${Partlycloudy}`;
    }
    if (k > 35) {
      pics.innerHTML = `${sun}`;
    }
    if (k < 20 && data.main.humidity < 70) {
      pics.innerHTML = `${fully_cloud}`;
    }
    if (data.main.humidity > 70) {
      pics.innerHTML = `${overcast}`;
    }
    if (data.main.temp < 1) {
      pics.innerHTML = `${sleet}`;
    }
    if (date.getHours() < 5 && date.getHours() > 21) {
      pics.innerHTML = `${night}`;
    }
    if (k <= 0 && data.main.humidity >= 80 && data.wind.speed < 5){
      pics.innerHTML = `${snowfall}`;
    }
  };
  var city;

  document.querySelector(".searchImg").addEventListener("click", () => {
    city = document.getElementById("cityName").value;
    weather(city);
  });
  const input = document.getElementById("cityName");

  input.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      // e.preventDefault();
      city = document.getElementById("cityName").value;
      weather(city);
    }d
  });
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.code === "Enter") {
      // e.preventDefault();
      city = document.getElementById("cityName").value;
      weather(city);
    }
  });
  weather("hassan");
});
