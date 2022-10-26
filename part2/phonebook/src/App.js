import { useState } from 'react'

import Filter  from './components/Filter'
import PersonForm  from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filterName, setFilterName] = useState('')
 
  const addPerson = (newPerson) => {
    Object.assign(newPerson, {id: persons.length+1});
    setPersons(persons.concat(newPerson))
  }

  const filteredPersons = persons.filter( (x) => 
    x.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterName={filterName}
        setFilterName={setFilterName}
      />

      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson}/>
      

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App