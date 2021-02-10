import React, { useState } from 'react'

import { useCounter } from '../../Hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {
  
  const {counter, increment} =useCounter(1)
  
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Memoriize <Small value={counter} /> </h1>
      <hr/>

      <button
        className="btn btn-primary m-3"
        onClick={ increment }
      >Increment</button>

      <button
        className="btn btn-outline-primary"
        onClick={ () => { setShow( !show ) } }
      >Show/Hide {JSON.stringify(show)}</button>

    </div>
  )
}
