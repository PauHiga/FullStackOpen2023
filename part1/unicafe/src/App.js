import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  return(
    <table>
      <tbody>
        <StatisticLine text="Good" value ={good} />
        <StatisticLine text="Neutral" value ={neutral} />
        <StatisticLine text="Bad" value ={bad} />
        <StatisticLine text="All" value ={good + bad + neutral} />
        <StatisticLine text="Average" value ={(good + bad + neutral) > 0 ? (good-bad)/(good + bad + neutral) : "No feedback yet"} />
        <StatisticLine text="Positive" value ={(good + bad + neutral) > 0 ? `${(good)*100/(good + bad + neutral)} %` : "No feedback yet"} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => { 
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={()=>{setGood(good + 1)}} text="Good"/>
      <Button handleClick={()=>{setNeutral(neutral + 1)}} text="Neutral"/>
      <Button handleClick={()=>{setBad(bad + 1)}} text="Bad"/>
      <h2>Statistics</h2>
      {(good + bad + neutral) > 0 ? <Statistics good={good} neutral={neutral} bad={bad}/> : <p>No feedback given</p>}

    </div>
  )
}

export default App