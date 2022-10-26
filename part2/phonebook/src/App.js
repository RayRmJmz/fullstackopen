import { useState } from 'react'

const Filter = ({ filterName, setFilterName }) => {
  const handleFilterChange = (event) => setFilterName(event.target.value)
  
  return (
    <p>
      filter shown with
      <input value={filterName} onChange={handleFilterChange} />
    </p>
  )
}

const Person = ({ name, number,  }) => {
  return (
    <p>
      {name} {number}
    </p >
  )
}
const Persons = ({ persons }) => (
  <>
    {persons.map(p =>
      <Person
        key={p.id}
        name={p.name}
        number={p.number}
      />
    )}
  </>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [filterName, setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (persons.filter(e => e.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }else{
      const personObject = {
        name : newName,
        number : newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const filteredPersons = persons.filter( (x) => 
    x.name.toLowerCase().includes(filterName.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterName={filterName}
        setFilterName={setFilterName}
      />

      <h2>Add a new</h2>

      <form onSubmit={addPerson}>
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

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App