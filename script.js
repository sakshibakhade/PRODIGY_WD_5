const city = document.querySelector('#input');
const btn = document.querySelector('#btn');
const img = document.querySelector('.logo');
const temp = document.querySelector('.temp');
const city1 = document.querySelector('.city');
const region = document.querySelector('.region');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const dateTime = document.querySelector('.dateTime');
const text = document.querySelector('.text');


btn.addEventListener("click", checkWeather)

function checkWeather() {
    console.log(city.value);
    // API ka Matter
    const url = `https://api.weatherapi.com/v1/current.json?key=5f0347eb41a44924ab3165138240607&q=${city.value}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            img.innerHTML = '';
            img.src = `https:${data.current.condition.icon}`
            text.innerHTML = data.current.condition.text;
            temp.innerHTML = data.current.temp_c;
            city1.innerHTML = data.location.name;
            region.innerHTML = data.location.region;
            humidity.innerHTML = `${data.current.humidity}%`;
            windSpeed.innerHTML = `${data.current.wind_kph}Km/h`;
            dateTime.innerHTML = data.current.last_updated;
        })

}

document.addEventListener("DOMContentLoaded", function() {
    const mainDiv = document.getElementById("main-div");
    mainDiv.classList.add("visible");
});