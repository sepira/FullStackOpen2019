import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({onClick, text}) => (
    <button onClick = {onClick}>
        {text}
    </button>
)

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>   
    )
}


const Statistics = (props) => {

    if (props.totalFeedback === 0 ) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    <Statistic text='good' value={props.good}/>
                    <Statistic text='neutral' value={props.neutral}/>
                    <Statistic text='bad' value={props.bad}/>
                    <Statistic text='average' value={(props.good - props.bad) / props.totalFeedback}/>
                    <Statistic text='positive' value={(props.good / props.totalFeedback) * 100 + ' %'}/>
                </tbody>
            </table>
        </div>
    )

}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allFeedbacks, setAllFeedbacks] = useState(0)

    const handleGoodClick = () => {
        setAllFeedbacks(allFeedbacks + 1)
        setGood(good + 1)
    }
        
    
    const handleNeutralClick = () => {
        setAllFeedbacks(allFeedbacks + 1)
        setNeutral(neutral + 1)
    }
        

    const handleBadClick = () => {
        setAllFeedbacks(allFeedbacks + 1)
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text='good'/>
            <Button onClick={handleNeutralClick} text='neutral'/>
            <Button onClick={handleBadClick} text='bad'/>
            <h1>statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} totalFeedback={allFeedbacks}/>
        </div>
      
    )
  }
  

ReactDOM.render(<App />, document.getElementById('root'));
