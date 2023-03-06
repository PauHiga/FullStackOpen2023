import React from 'react'

function DisplayPersons({persons, filterThis, deleteThis}) {
    return (
        <ul>
            {persons.filter(item =>item.name.toLowerCase().includes(filterThis)).map((item) => 
            <li key={item.id}>
            <p key={item.id}>{item.name}:{item.number}</p> 
            <button onClick={() => deleteThis(item)}>Delete</button>
            </li>)}
        </ul>
  )
}

export default DisplayPersons