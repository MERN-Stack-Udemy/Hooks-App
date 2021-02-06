import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();
  
  const handleClick = () => {
    // document.querySelector('input').focus();
    inputRef.current.select();
  }

  return (
    <div>
      <h2>Focus Screen</h2>
      <hr/>

      <input
        ref={ inputRef }
        className="form-control"
        placeholder="your name"
      />

      <button
        className="btn btn-primary mt-3"
        onClick={ handleClick }
      >
        Focus
      </button>

    </div>
  )
}
