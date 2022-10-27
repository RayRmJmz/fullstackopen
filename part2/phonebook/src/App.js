import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter  from './components/Filter'
import PersonForm  from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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