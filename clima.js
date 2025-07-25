async function fetchData() {
        let respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bucaramanga&appid=5aae620ff77cae46ec62420c758c2d53&units=metric');
    let data = await respuesta.json();
    console.log(data);
    document.querySelector("#country").innerHTML = data.sys.country
    document.querySelector("#city").innerHTML = data.name
    document.querySelector("#temp").innerHTML = data.main.temp
    document.querySelector("#feelsLike").innerHTML = data.main.feels_like
    document.querySelector("#wind").innerHTML = data.wind.speed
    document.querySelector("#hume").innerHTML = data.main.humidity
    document.querySelector("#presure").innerHTML = data.main.pressure
}
    fetchData();