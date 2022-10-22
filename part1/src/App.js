import { useState } from 'react'


const StatisticLine = props =>{
  return (
    <div>
      {props.text} {props.value} 
    </div>
  )

}

const Statics = props =>{
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="average" value ={(props.good - props.bad ) / props.all} />
      <StatisticLine text="positive" value ={(props.good * 100 ) / props.all} />
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
  const [all, setAll] = useState(0)

  const setToGood = () =>
  {
    setGood(good+1)
    setAll(all+1)
  } 
  const setToNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const setTobad = () => {
    setBad(bad+1)
    setAll(all+1)
  }

  return (
    <div>
      <Titles text='give feedback' />
      <Button handleClick={() => setToGood()} text='good'/>
      <Button handleClick={() => setToNeutral()} text='neutral'/>
      <Button handleClick={() => setTobad()} text='bad'/>
      <Titles text='statics' /> 
      <Statics text='good' all={all} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
