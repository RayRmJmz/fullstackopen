import { useState } from 'react'

const Statics = props => <div>{props.text} {props.value}</div>
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
      <Statics text='good' value={good} />
      <Statics text='neutral' value={neutral} />
      <Statics text='bad' value={bad}/>
    </div>
  )
}

export default App
