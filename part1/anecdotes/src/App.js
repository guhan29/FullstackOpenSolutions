import { useState } from 'react'

const Header = ({text}) => {
  return <h2>{text}</h2>
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Anecdote = ({text, votes}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const MaxAnecdote = ({anecdotes, votes}) => {
  const maxVote = Math.max(...votes)
  const maxVoteIndex = votes.indexOf(maxVote)
  return <Anecdote text={anecdotes[maxVoteIndex]} votes={votes[maxVoteIndex]} />
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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const handleSelect = () => {
    let nextAnecdote = selected
    while (selected === nextAnecdote) {
      nextAnecdote = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(nextAnecdote)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button text="vote" onClick={handleVote} />
      <Button text="next anecdote" onClick={handleSelect} />
      
      <Header text="Anecdote with most votes" />
      <MaxAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
