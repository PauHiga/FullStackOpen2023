import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import DisplayPersons from './components/DisplayPersons'
import PersonForm from './components/PersonForm'
import numbersService from "./services/numbers"
import Notification from './components/Notification'
import './style.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterThis, setFilterThis] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState("message")

  useEffect(()=>{
    numbersService
      .getAll()
      .then(item => setPersons(item))
  }, [])

  const submitNewPerson = (event) =>{
    event.preventDefault()
    const newPersonObject = {
      "name": newName, 
      "number": newNumber, 
    };

    if (newPersonObject.name === ""){
      alert("Please complete the name")

    }
    if (newPersonObject.number === ""){
      alert("Please complete the phone")
    }

    else if (isRepeated(newPersonObject)){
      if (window.confirm(`${newPersonObject.name} already has been added to the phonebook. Replace the old number with a new one?`)){ 
      const repeatedPerson = persons.find(person => person.name === newPersonObject.name)

      numbersService
        .update(repeatedPerson.id, newPersonObject)
        .then((response)=> {
          const newPersonsList = persons.map(item => item.id !== repeatedPerson.id? item : response)
          setPersons (newPersonsList)
          setNewName('')
          setNewNumber('')
        })
        .catch((error)=>{
          setMessageType('error')
          setMessage(`Information of ${newPersonObject.name} has already been removed from server`)
          setTimeout(()=>setMessage(null), 5000)
          setPersons(persons.filter((item)=>item.id !== repeatedPerson.id))
        })
      }
    }

    else {
        numbersService
      .create(newPersonObject)
      .then((response)=> {const newPersonsList = persons.concat(response)
      setPersons(newPersonsList)
      setMessage(`Added ${newPersonObject.name} to the database`)
      setMessageType('message')
      setTimeout(()=>setMessage(null), 5000)
      setNewName('')
      setNewNumber('')}
      )

    };
  }

  const isRepeated = (newEntry) => {
    const areEqual = (person, entry) =>{
      if (person.name !== entry.name){
        return false}
      return true
      }

    for (let person of persons){
      if (areEqual(person, newEntry)){
        return true
      }
    }
  }


  const deleteThis = (currentPerson) =>{
    if (window.confirm(`Delete ${currentPerson.name}?`)){
    numbersService
        .deletePerson(currentPerson.id)
        .then(()=> setPersons(persons.filter(item => item.id !== currentPerson.id)))
        .catch((error)=>{
          setMessageType('error')
          setMessage(`Information of ${currentPerson.name} has already been removed from server`)
          setTimeout(()=>setMessage(null), 5000)
          setPersons(persons.filter((item)=>item.id !== currentPerson.id))
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} messageType={messageType}/>
      <Filter filterThis={filterThis} setFilterThis={setFilterThis}/>
      <h2>Add a New</h2>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} submitNewPerson={submitNewPerson}/>
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} filterThis={filterThis} deleteThis={deleteThis}/>
    </div>
  )
}

export default App