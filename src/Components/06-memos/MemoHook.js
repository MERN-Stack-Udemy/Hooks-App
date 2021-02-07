import React, { useMemo, useState } from 'react'

import { heavyProccess } from '../../helpers/heavyProccess';
import { useCounter } from '../../Hooks/useCounter'

export const MemoHook = () => {
  
  const {counter, increment} =useCounter(500);
  const [show, setShow] = useState(true);
  
  

  const processedMemo = useMemo(() => heavyProccess(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr/>
      <h3>Counter <small>  {counter} </small> </h3>
      <hr/>

      <p>{ processedMemo }</p>

      <button
        className="btn btn-primary m-3"
        onClick={ increment }
      >Increment</button>

      <button
        className="btn btn-outline-primary"
        onClick={ () => { setShow( !show ) } }
      > Hide/Show : {JSON.stringify(show)}</button>

    </div>
  )
}
