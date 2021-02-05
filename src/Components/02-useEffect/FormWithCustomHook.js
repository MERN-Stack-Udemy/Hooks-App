import React from 'react'
import { useForm } from '../../Hooks/useForm';

import './simpleForm.css'

export const FormWithCustomHook = () => {

  const [{name, email, password}, handleChange] = useForm({
    name: '',
    email : '',
    password:''
  })

  return (
    <>
      <h1> FormWithCustomHook </h1>
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
          type="email"
          name="email"
          className="from-control"
          placeholder="your-email@gmail.com"
          autoComplete="off"
          value={ email }
          onChange={ handleChange }
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="from-control"
          placeholder="your password"
          value={ password }
          onChange={ handleChange }
        />
      </div>

    </>
  )
}
