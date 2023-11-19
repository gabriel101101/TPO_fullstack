
let clima = document.querySelector('.clima');
let city = "mendoza";
let country="Argentina";


function callAPI(city, country){
    
    const apiID= '41d1d7f5c2475b3a16167b30bc4f265c';
    const url= `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiID}`;

    fetch(url)
    .then(data => {
        return data.json();
    })
    .then(dataJSON => {
        showWeather(dataJSON);
        //console.log(dataJSON);
    })
}

function showWeather(data){
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);
    
    clima.innerHTML = `
    <h3>Clima en ${name}</h3>
    <img class="sol" src="http://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
    <h2>${degrees}°C</h2>
    <p>Max: ${max}°C</p>
    <p>Min: ${min}°C</p>
   
    `;

}

function kelvinToCentigrade(temp){
    return parseInt(temp - 273.15);
}

callAPI(city, country);

