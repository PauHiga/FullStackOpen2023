const PersonForm = ({newName, setNewName, newNumber, setNewNumber, submitNewPerson}) => {
return(
    <form>
        <div>
            Name: <input value={newName} onChange={(event)=>setNewName(event.target.value)}/>
        </div>
        <div>
            Phone: <input value={newNumber} onChange={(event)=>setNewNumber(event.target.value)}/>
        </div>
        <div>
            <button type="submit" onClick={submitNewPerson}>add</button>
        </div>
    </form>
)
}

export default PersonForm