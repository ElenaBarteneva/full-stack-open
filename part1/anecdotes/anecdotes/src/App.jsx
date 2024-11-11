import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const TopRatedAnecdote = (props) => {
  return (
    <>
    <h2>Anecdote with most votes</h2>
    <p>{props.anecdote}</p>
    <p>has {props.votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // const points = Array(8).fill(0);
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(8).fill(0))
  // const [votes, setVotes] = useState(0)

  const handleClickNext = () => {
    setSelected(Math.floor(anecdotes.length * Math.random()));
  }

  const handleClickVote = () => {
    // setVotes(votes + 1);
    const updatedPoints = [...points]
    updatedPoints[selected] = updatedPoints[selected] + 1
    setPoints(updatedPoints);
    console.log(updatedPoints);
  }

  const topVotes = Math.max(...points); 
  const indexOfTopRated = points.indexOf(topVotes)
  const topRated = anecdotes[indexOfTopRated]

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleClickVote} text="Vote"/>
      <Button handleClick={handleClickNext} text="Next anecdote"/>
      <TopRatedAnecdote anecdote={topRated} votes={topVotes}/>
    </div>
  )
}

export default App
