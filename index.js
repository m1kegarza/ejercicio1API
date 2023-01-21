// function consultar(){
//     var ciudad = document.getElementById("ciudad").value;


// // const getWeatherbyCity = async () => {
// //   let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=616629f9acdc3b22b8b09553e632e5da`
// //   const response = await fetch(url)
// //   console.log('response', response)
// //   const data = await response.json()
// //   console.log('data', data)
// // }

// fetch (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`)
// .then(response => response.json())
// .then(data => {
//     console.log(`La temperatura de ${ciudad} es de ${data.main.temp} grados`);
// })
// .catch(error => console.log(error));    
// }


// consultar()
// //getWeatherbyCity()

const btn = document.getElementById('btn')

const getWeather = async() =>{
    let ciudad = document.getElementById('ciudad').value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=616629f9acdc3b22b8b09553e632e5da`
    const response = await fetch(url)
    console.log('response', response)
    const data = await response.json()
    const {main} = data
    console.log(`La temperatura en ${ciudad} es de ${main.temp}`)
} 


getWeather()