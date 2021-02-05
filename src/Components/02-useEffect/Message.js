import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log('component mounted');

    const mouseMove = (e) => {
      console.log('mouse moved')
    }

    window.addEventListener('mousemove', mouseMove );

    return () => {
      //
      console.log('unmount component')
      window.removeEventListener( 'mousemove', mouseMove );
    }
  }, []);

  return (
    <div>
      <h3>You Rock!!</h3>
    </div>
  )
}
