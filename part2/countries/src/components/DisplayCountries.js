import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"

const DisplayCountries = ({filteredCountries}) =>{

    const [countriesToShow, setCountriesToShow] = useState([])

    useEffect(()=>{setCountriesToShow(filteredCountries)}, [filteredCountries])

    const handleClick = (item)=>{setCountriesToShow([item])}
    
    if(countriesToShow.length >10){
        return "Too many matches, specify another filter"
    }

    else if(countriesToShow.length > 1){
        return (
            <ul>
                {filteredCountries.map(item=>{
                return <li key={item.name.common}>{item.name.common} <button onClick={()=> handleClick(item)}>Show</button></li>})}
            </ul>
        )
    }
    else if(countriesToShow.length === 1){
        return (
            <CountryCard country={countriesToShow[0]}/>
        )
    }
    else return "No matches"
 
}

export default DisplayCountries