import React, { useContext } from 'react'
import { useForm } from '../../Hooks/useForm';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const [ {userName}, handleChange ] = useForm({});

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setUser({
      id: new Date().getTime(),
      name: userName
    })
  }

  return (
    <div>
      <h1>Login Screen</h1>
      <hr/>
      <div className="container-md">
        <form onSubmit={ handleSubmit }>
          <input
            autoComplete="off"
            className="form-control"
            name="userName"
            onChange={handleChange}
            placeholder="User name"
            type="text"
            value={userName}
          />

          <button 
            className="btn btn-outline-primary mt-2 btn-block" 
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
