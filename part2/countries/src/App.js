import axios from "axios"
import { useEffect, useState } from "react"
import DisplayCountries from "./components/DisplayCountries"
import Filter from "./components/Filter"

const App = () =>{

    const [countries, setCountries] = useState([])
    const [filterThis, setFilterThis] = useState("")
   
    useEffect(()=>{
    axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => {
            setCountries(response.data)
            })
    }, [])

    return(
        <div>
            <h1>Data for Countries</h1>
            <Filter filterThis={filterThis} setFilterThis={setFilterThis}/>
            <DisplayCountries filteredCountries={countries.filter((item)=> item.name.common.toLowerCase().includes(filterThis.toLowerCase()))}/>
        </div>
        
    )
}

export default App