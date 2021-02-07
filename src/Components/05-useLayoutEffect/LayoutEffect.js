import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';

import './layout.css';


export const LayoutEffect = () => {
  
  const { counter, decrement, increment } = useCounter(1);
  // console.log(counter)
  const state = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  const {/*loading,*/ data} = state;
  const {/* author,*/ quote } = !!data && data[0];

  // console.log(state, data, error);

  const [boxSize, setBoxSize] = useState( {} );

  const tagRef = useRef()

  useLayoutEffect(() => {
    setBoxSize( tagRef.current.getBoundingClientRect() );
  }, [quote])


  return (
    <div>
      <h3>Layout Effect - Breaking Bad Quotes</h3>
      
      <blockquote className="blockquote text-right">
        <p ref={tagRef}
         className="mb-2"> { quote } </p>
        {/* <footer className="blockquote-footer">{ author }</footer> */}
      </blockquote>
      
      
      { ( counter>1 )&&
        <button
          className="btn btn-primary m-1"
          onClick={ () => decrement() }
        >
          Previus Quote 
        </button>
      }

      <button
        className="btn btn-primary"
        onClick={ () => increment() }
      >
        Next Quote 
      </button>
    
      <pre>
        {JSON.stringify( boxSize, null, 3 )}
      </pre>
    </div>
  )
}
