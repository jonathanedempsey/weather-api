const appID = '8934fd71e3f8faf015e516e7792b9165';
const cityID = '2964574'; // Dublin, IE
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${appID}`;

$.getJSON(weatherAPI, function(data) {
    console.log(data);

    const iconID = data.weather[0].icon;
    const icon = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
    const temperature = data.main.temp;


    $('.icon').attr('src', icon);
    $('.temperature').append(temperature);
});
