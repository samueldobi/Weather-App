const temp = document.querySelector('.temp')
const locate = document.querySelector('.location')
const condition = document.querySelector('.condit')
const searchBtn =  document.querySelector('.search-btn')
const inputField = document.querySelector('.form-control')


searchBtn.addEventListener('click',()=>{
    getApi(inputField.value)
})
//Retrieving api data
function getApi(city){
    let api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ba47b673207e9c0536f15e9399b73a0`
    fetch(api)
    .then(response => response.json())
    .then(result => (weatherDetails(result)))
    // .catch((error) => {
    //     console.error('Error:', error);
    //   });
  
}
function weatherDetails(info){
    if(info.cod === "404" ){
        alert('City not found')
    }
    let degree = ((info.main.feels_like) - 273.15).toFixed(2)
    let cityName = info.name
    let weatherDescription = info.weather[0].description
    console.log(weatherDescription)
    temp.innerHTML = degree
    locate.innerHTML = cityName
    condition.innerHTML = weatherDescription
}