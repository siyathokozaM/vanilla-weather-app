let searchButton = document.querySelector(".search-button");
let city = document.querySelector(".city");

let icon = document.querySelector(".icon");

function searchWeather(response) {
  console.log(response.data);

  city.innerHTML = response.data.city;

  document.querySelector(
    ".temper"
  ).innerHTML = `${response.data.temperature.current}°C`;

  document.querySelector(".coverage").innerHTML =
    response.data.condition.description;

  document.querySelector(
    ".humidity"
  ).innerHTML = `${response.data.temperature.humidity}%`;

  document.querySelector(".wind").innerHTML = `${response.data.wind.speed}km/h`;

  document.querySelector(".pressure").innerHTML =
    response.data.temperature.pressure;

  document.querySelector(
    ".icon"
  ).innerHTML = `<img src ="${response.data.condition.icon_url}" alt="Icon"/>`;
}

function searchData() {
  let searchInput = document.querySelector("#searchInput").value;

  let apiKey = "4824o763a0a4e436tb063a409ba4f083";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput}&key=${apiKey}&units=imperial`;

  axios(apiUrl)
    .then(searchWeather)
    .catch((error) => console.error("city not found"));
}

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  searchData();
});
