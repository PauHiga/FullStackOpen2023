const Filter = ({filterThis, setFilterThis}) => {
    return (
        <div>
            Find countries: <input type="text" value={filterThis} onChange={(event)=>setFilterThis(event.target.value)}/>
        </div>
    )
}

export default Filter