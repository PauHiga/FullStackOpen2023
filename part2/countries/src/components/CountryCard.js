import DisplayWeather from "./DisplayWeather"

const CountryCard = ({country}) =>{
    const style = {
        padding: '0px 10px 20px 10px',
        borderStyle: 'solid',
        borderColor: 'black',
        margin: '15px',
        maxWidth: '500px'
    }

    return(
        <div style={style}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}<br/>
            Area: {country.area} km2</p>
            <p>Languages:</p>
            <ul>
                {Object.values(country.languages).map(item=><li key={item}>{item}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
            <DisplayWeather city={country.capital[0]} lat={country.capitalInfo.latlng[0]} lon={country.capitalInfo.latlng[1]}/>
        </div>
    )
}

export default CountryCard