import React from 'react'
import './counter.css'

const Counter = ({cnt,plus,minus,reset}) => {
  return (
    <div className='app'>
      <div className='counter'>
      <h1>Counter App</h1>
      <h2>{cnt}</h2>
      {
        cnt == 0 
        ? (
          <button disabled onClick={() => minus()}>-</button>
        )
        : (
          <button onClick={() => minus()}>-</button>
        )
      }
      {
        cnt == 0 
        ? (
            <button disabled onClick={() => reset()}>Reset</button>
        )
        : (
          <button onClick={() => reset()}>Reset</button>
        )
        
      }
      <button onClick={() => plus()}>+</button>
      </div>
    </div>
  )
}

export default Counter
