import React from 'react'
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch'


export const MultipleCustomHooks = () => {
  
  const { counter, decrement, increment } = useCounter(1);
  // console.log(counter)
  const state = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  const {loading, data, error} = state;
  const { author, quote } = !!data && data[0];

  // console.log(state, data, error);

  return (
    <div>
      <h3>Breaking Bad Quotes </h3>

      { 
        loading ? 
        <div className="alert alert-info text-center">
          Loading...
        </div>
        : <blockquote className="blockquote text-right">
          <p className="mb-2"> { quote } </p>
          <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
      }
      
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
    
    </div>
  )
}
