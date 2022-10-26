import { useState } from 'react'

const Numbers = ({numbers}) => {
  return (
    <p>{numbers.name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.filter(e => e.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }else{
      const personObject = {
        name : newName
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
         />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => 
          <Numbers key={person.name} numbers={person} />
        )
      }
     
    </div>
  )
}

export default App