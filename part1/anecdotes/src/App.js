import { useState } from 'react'

const MyTittles = (props) => <div><h1>{props.text}</h1></div>
const MyBtn = (props) => <button onClick={props.handleClick}>{props.text}</button>
const MyText = (props) => <div> {props.text}</div>

const MostVotes = (props) =>{
  const maxVotes = Math.max(...props.votes)
  const mostVotesIndex = props.votes.indexOf(maxVotes)
 console.log(maxVotes)

  if (maxVotes === 0 ){
    return (
    <div>
      No notes has received votes 
    </div>
    )
  }

  return (
    <div>
      <MyText  text={props.anecdotes[mostVotesIndex]} />
      <MyText  text={`has ${maxVotes} votes`} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max))
  } 

  const setToValue = (max)  => setSelected(getRandomInt(max))
  
  const setToVote = () =>{
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <MyTittles text='Anecdote of the day' />
      <MyText  text={anecdotes[selected]} />
      <MyText  text={`has ${points[selected]} votes`} />
      <MyBtn handleClick={() => setToVote()} text='vote'/>
      <MyBtn handleClick={() => setToValue(anecdotes.length)} text='next anecdote'/>
      <MyTittles text='Anecdote with most votes' />
      <MostVotes anecdotes={anecdotes} votes={points} />
    </div>
  )
}

export default App