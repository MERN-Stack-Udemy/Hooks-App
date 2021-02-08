import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
  const [counter , setCounter ] = useState(10);

  // const increment = () => {
  //   setCounter( counter + 1 );
  // }

  const increment = useCallback( (num) => {
    setCounter( count => count + num );
  }, [setCounter]);

  useEffect(() => {
    // ????
  }, [increment])
  
  return (
    <div>
      <h1>Callback Hook</h1>
      <hr/>
      <h3>Counter: { counter }</h3>
      {/* // children */}
      <ShowIncrement increment = { increment } />
    </div>
  )
}
