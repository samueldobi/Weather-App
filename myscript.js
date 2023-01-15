const temp = document.querySelector('.temp')
const locate = document.querySelector('.location')
const condition = document.querySelector('.condit')
const searchBtn =  document.querySelector('.search-btn')
const inputField = document.querySelector('.form-control')
const humidity = document.querySelector('.humid')
const pressure = document.querySelector('.pressure')
const seaLevel = document.querySelector('.sea-level')
const GroundLevel  = document.querySelector('.ground-level')


searchBtn.addEventListener('click',()=>{
    getApi(inputField.value)
})
//Retrieving api data
function getApi(city){
    let api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ba47b673207e9c0536f15e9399b73a0`
    fetch(api)
    .then(response => response.json())
    .then(result => (weatherDetails(result)))
}
function weatherDetails(info){
    if(info.cod === "404" ){
        alert('City not found')
    }
    console.log(info)
    let degree = ((info.main.feels_like) - 273.15).toFixed(2)
    let cityName = info.name
    let weatherDescription = info.weather[0].description
    let hum = info.main.humidity
    let press = info.main.pressure
    let sea = info.main.sea_level
    let grnd = info.main.grnd_level
    // console.log(weatherDescription)
    temp.innerHTML = degree
    locate.innerHTML = cityName
    condition.innerHTML = weatherDescription
    humidity.innerHTML = hum
    pressure.innerHTML = press
    seaLevel.innerHTML = sea
    GroundLevel.innerHTML = grnd
    if( info.main.sea_level  === undefined){
        seaLevel.innerHTML  = "Not available"
        GroundLevel.innerHTML = "Not available"
    }
}