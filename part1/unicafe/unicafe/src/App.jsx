import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )

}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={props.total} />
      <StatisticLine text="Average" value={props.average} />
      <StatisticLine text="Positive" value={props.positive + "%"} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState (0)

  const handleClickGood = () => {
    setGood(good + 1);
    const updatedGood = good + 1;
    const updatedTotal = updatedGood + neutral + bad;
    setTotal(updatedTotal);
    setAverage((updatedGood - bad) / updatedTotal);
    setPositive(updatedGood / updatedTotal * 100);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    const updatedNeutral = neutral + 1;
    const updatedTotal = updatedNeutral + good + bad;
    setTotal(updatedTotal);
    setAverage((good - bad) / updatedTotal);
    setPositive(good / updatedTotal * 100);
    
  }

  const handleClickBad = () => {
    setBad(bad + 1);
    const updatedBad = bad + 1;
    const updatedTotal = updatedBad + good + neutral;
    setTotal(updatedTotal);
    setAverage((good - updatedBad) / updatedTotal);
    setPositive(good / updatedTotal * 100);
  }

  return (
    <div>
      <h2>Give feedback</h2>
  
      <Button handleClick={handleClickGood} text="good"/>
      <Button handleClick={handleClickNeutral} text="neutral"/>
      <Button handleClick={handleClickBad} text="bad"/>

      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive} total={total}/>
    </div>
  )
}

export default App