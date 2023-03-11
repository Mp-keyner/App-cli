import { useState } from "react";

let urlApiCli = 'https://api.openweathermap.org/data/2.5/weather?appid=26c25a94171b06cf681d940caed738cf&lang=es'
let cityUrl = "&q="
let urlForecast = 'https://api.openweathermap.org/data/2.5/weather?appid=26c25a94171b06cf681d940caed738cf&lang=es'

const [weather, setweather] = useState([])
const [forecast, setForecast] = useState([])
const [show, setShow] = useState(false)
const [location, setLocation] = useState("")
const [loading, setloading] = useState(false)


const getLocation = async(loc) => {
    setloading(true)
    setLocation(loc)

    // /weather/weather
    urlApiCli = urlApiCli +   cityUrl + loc

    await fetch(urlApiCli).then((response)=> {
      if (!response.ok) throw {response}
        return response.json()
    }).then((weatherData) => {
        setweather(weatherData)
        console.log(weatherData, 'Actual')
    } ).catch(error =>{
      console.log(error)
      setloading(false)
      setShow(false)
    })

    urlForecast = urlForecast + cityUrl + loc

    await fetch(urlForecast).then((response)=> {
      if (!response.ok) throw {response}
        return response.json()
    }).then((forecastData) => {
        setForecast(forecastData)
        console.log(forecastData, 'Futuro')
        setloading(false)
        setShow(true)
    } ).catch(error =>{
      console.log(error)
      setloading(false)
      setShow(false)
    })

}
export default getLocation