const appID = '8934fd71e3f8faf015e516e7792b9165';
const cityID = '2964574'; // Dublin, IE
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${appID}`;

$.getJSON(weatherAPI, function(data) {
    console.log(data);

    const iconID = data.weather[0].icon;
    const icon = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
    const temperature = Math.floor(data.main.temp);
    const weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $('.temperature').append(temperature);
    $('.weather').append(weather);
});
