import React, { useEffect, useState } from 'react'
import './simpleForm.css'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email : ''
  })

  const { name, email } = formState;
  
  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ] : target.value
    })
  }

  // useEffect(()=>{
  //   console.log('hee oh!')
  // }, [] );

  // useEffect(()=>{
  //   console.log('formState changed')
  // }, [ formState ] );

  useEffect(()=>{
    console.log('name changed!')
  }, [name] );

  useEffect(()=>{
    console.log('email changed!')
  }, [email] );

  return (
    <>
      <h1> useEffect </h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="from-control"
          placeholder="Write Your Name"
          autoComplete="off"
          value={ name }
          onChange={ handleChange }
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="from-control"
          placeholder="your-email@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={ handleChange }
        />
      </div>

    </>
  )
}
