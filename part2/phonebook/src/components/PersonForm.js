import { useState } from 'react'

const PersonForm = ({ addPerson }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) =>  setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleAddContact = (event) => {
    event.preventDefault()

    const personObject = {
      name : newName,
      number : newNumber
    }

    addPerson(personObject)
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={handleAddContact}>
      <div>
        name: 
        <input 
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: 
        <input 
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm