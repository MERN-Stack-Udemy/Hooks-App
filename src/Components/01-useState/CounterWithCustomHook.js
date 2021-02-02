import React from 'react'
import { useCounter } from '../Hooks/useCounter'

import './styles/Counter.css'

export const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <div>
      <h1>Counter { state }</h1>
      <hr/>
      <button onClick={ () => decrement(5) } className="mr2 btn btn-primary" >decrement</button>
      <button onClick={ reset } className="mr2 btn btn-primary" >reset</button>
      <button onClick={ () => increment(5) } className="mr2 btn btn-primary" >increment</button>
    </div>
  )
}
