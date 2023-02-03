import { useState } from 'react'

    
const App = () => {
    
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

       const [selected, setSelected] = useState(0)

    const getAnecdote = () => {
        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        const numberOfAnecdotes = anecdotes.length
        const randomInt = getRandomInt(0,numberOfAnecdotes)

        setSelected(randomInt)
    }
   
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
    
    const vote = () => {
        const copy = [...points]
        // increment the value in position 2 by one
        copy[selected] += 1
        setPoints(copy)
        mostVoted(copy)
    }

    const [topAnecdote, setTopAnecdote] = useState("")

    const mostVoted = (copy) =>{
        let bestVote = Math.max(...copy)
        for (let item in anecdotes) {
            if (copy[item] === bestVote){
                setTopAnecdote(anecdotes[item])
            }
        }
    }

    console.log(anecdotes);
    console.log(points);
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>Has {points[selected]} votes</p>
            <button onClick={getAnecdote}>Get random anecdote</button>
            <button onClick={vote}>Vote this anecdote!</button>
            <h2>Anecdote with most votes</h2>
            <p>{topAnecdote}</p>
        </div>
    )
}

export default App