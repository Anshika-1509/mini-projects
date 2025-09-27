const inputbox = document.querySelector(".input-box");
const searchbtn = document.querySelector("#search-btn");
const weather_img = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const descrip = document.querySelector(".desc");
const humid = document.querySelector("#humidity");
const winds = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");


async function checkweather(city) {
    const api_key = "476849ce2351fe3f68099f5720fa052e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";

        return;

    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    descrip.innerHTML = `${weather_data.weather[0].description}`;
    humid.innerHTML = `${weather_data.main.humidity}%`;
    winds.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case `Clouds`:
            weather_img.src = "cloud.png";
            break;
        case `Clear`:
            weather_img.src = "clear.png";
            break;
        case `Rain`:
            weather_img.src = "rain.png";
            break;
        case `Mist`:
            weather_img.src = "mist.png";
            break;
        case `Snow`:
            weather_img.src = "snow.png";
            break;

    }
}



searchbtn.addEventListener("click", () => {
    checkweather(inputbox.value)
})