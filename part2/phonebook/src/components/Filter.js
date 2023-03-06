import React from 'react'

function Filter({filterThis, setFilterThis}) {
  return (
    <div>
        Filter shown with <input value={filterThis} onChange={(event)=>setFilterThis(event.target.value)}/>
    </div>
  )
}

export default Filter