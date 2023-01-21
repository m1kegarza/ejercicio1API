const getWeather = async () => {
    let ciudad = document.getElementById('ciudad').value
    console.log(ciudad)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`
    const response = await fetch(url)
    console.log('response', response)
    const data = await response.json()
    const { main } = data
    console.log(`La temperatura en ${ciudad} es de ${main.temp}ºK`)
  
  }