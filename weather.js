const apikey = "95b8972619dbad1fe6bcd561c1110f3a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// c&q=mumbai
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://img.lovepik.com/element/40106/8849.png_1200.png";
        }
        else if (data.weather[0].main == "clear") {
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222807.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://i.pinimg.com/564x/78/97/7d/78977d761bbf1062cf46d570f424db60.jpg";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://gimgs2.nohat.cc/thumb/f/640/cloud-drizzle-rain-shower-storm-sun-weather-icon-sun-cloud-and-rain--m2i8m2A0Z5i8N4A0.jpg";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})