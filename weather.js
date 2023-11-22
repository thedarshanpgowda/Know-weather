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

  const weather = async (city) => {
    let response = await fetch(url + city + apiKey);
    let data = await response.json();
    console.log(data);
    // console.log(data.main);
    let k = data.main.temp.toFixed(1);
    let date = new Date();
    document.querySelector("#Actualtemperature").innerHTML = `${k}&deg;C `;
    document.querySelector("#humid").innerHTML = `${data.main.humidity}&deg;C `;
    document.querySelector("#wind").innerHTML = `${data.wind.speed}km/h `;
    document.querySelector("#place").innerHTML = `${data.name} `;
    document.querySelector("#day").innerHTML = `${day[date.getDay()]}`;
    document.querySelector("#date").innerHTML = `${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
  };
  var city;

  document.querySelector(".searchImg").addEventListener("click", () => {
    city = document.getElementById("cityName").value;
    weather(city);
  });
  const input = document.getElementById("cityName");
  input.addEventListener("keypress", (e) => {
    // console.log(e.key);
    if (e.code === "Enter") {
      e.preventDefault();
      city = document.getElementById("cityName").value;
      weather(city);
    }
  });
  weather("hassan");
});
