const apiKey = "78174ced21cc359afa82df139938d85a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector(".wether-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "img/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "img/clear.png";
}
else if(data.weather[0].main == "Dizzle"){
    weatherIcon.src = "img/dizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "img/mist.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "img/rain.png";
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "img/snow.png";
}

document.querySelector('.weather').style.display = "block"
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

