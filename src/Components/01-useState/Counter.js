import React, { useState } from 'react'
import './styles/Counter.css'

export const Counter = () => {

  const [ state, setState ] = useState({
    counter1 : 10, 
    counter2 : 20,
    counter3 : 30,
    counter4 : 40
  });
  const { counter1, counter2 } = state;
  // console.log( counter );
  // console.log( setCounter )

  return (
    <div>
      <h1> Counter 1  { counter1 } </h1>
      <h1> Counter 2  { counter2 } </h1>
      <button 
        className="btn btn-primary mr4 mb1"
        onClick= { () => {
          setState({ 
            ...state,
            counter1: counter1 + 1} ) 
          }
        } 
      >
        Counter 1 ++
      </button>
      <button 
        className="btn btn-primary"
        onClick= { () => {
          setState({ 
            ...state,
            counter2: counter2 + 1} ) 
          }
        } 
      >
        Counter 2 ++
      </button>
    </div>
  )
}
