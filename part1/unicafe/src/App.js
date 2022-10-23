import { useState } from 'react'


const StatisticLine = ({name, value}) =>{
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )

}

const Statics = ({good, neutral, bad}) =>{
  const all = good + neutral + bad
  const average = (good - bad ) / all
  const positive = ( good / all ) * 100 
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>name</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine name='good' value={good} />
        <StatisticLine name='neutral' value={neutral} />
        <StatisticLine name='bad' value={bad} />
        <StatisticLine name='average' value={average} />
        <StatisticLine name='positive' value={positive} />
      </tbody>
    </table>
    </div>
  )

}

const Titles = props => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good+1)
  const setToNeutral = () => setNeutral(neutral+1)
  const setTobad = () => setBad(bad+1)

  return (
    <div>
      <Titles text='give feedback' />
      <Button handleClick={() => setToGood()} text='good'/>
      <Button handleClick={() => setToNeutral()} text='neutral'/>
      <Button handleClick={() => setTobad()} text='bad'/>
      <Titles text='statics' /> 
      <Statics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
      />
    </div>
  )
}

export default App
