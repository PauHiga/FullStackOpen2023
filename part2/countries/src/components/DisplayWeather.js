import axios from "axios"
import { useEffect, useState } from "react"

const DisplayWeather = ({city, lat, lon}) =>{
    const API_key = process.env.REACT_APP_API_KEY

    const [weatherData, setWeatherData] = useState(null)
    const [icon, setIcon] = useState()
    const [altIcon, setAltIcon] = useState()


    useEffect(()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)
        .then((response)=> {setWeatherData(response.data)
        setIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        setAltIcon(response.data.weather[0].description)
        console.log(response.data)
    })
}, [city, API_key, lat, lon])

if (weatherData === null) return null

    console.log(icon)
    return (
    <div>
        <h3>Weather in {city}</h3>
        <p>Temperature: {weatherData.main.temp} Celcius</p>
        <img src={icon} alt={altIcon} />
        <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
    )
}

export default DisplayWeather