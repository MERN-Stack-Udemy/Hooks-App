import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../Hooks/useForm';

import './styles.css';

export const TodoApp = () => {

  const [ { description }, handleChage, reset ] = useForm({
    description:''
  });

  const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
  }

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);
  
  useEffect(() => {
    localStorage.setItem( 'todos', JSON.stringify(todos) );
  }, [todos])

  const handleSubmit = e => { 
    e.preventDefault();

    if( description.trim().length <=2){
      return;
    }
    
    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    const action = {
      type: 'ADD',
      payload: newToDo
    }
    
    dispatch( action );
    reset();
  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'TOGGLE',
      payload: todoId
    });
  }

  const handleDelete = todoId => {
    const action = {
      type: 'DELETE',
      payload: todoId
    };
    dispatch( action );
  } 

  return (
    <div>
      <h1>Todos ({todos.length})</h1>
      <hr/>

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              todos.map((todo, i) => (
                <li 
                  key={todo.id}
                  className="list-group-item"
                >
                  <p
                    className={ `${ todo.done && 'complete'}`}
                    onClick={()=> handleToggle( todo.id )}
                  >{i+1}. {todo.desc}</p>
                  <button 
                    className="btn btn-danger"
                    onClick= { () => handleDelete(todo.id) }
                  >Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">

          <h5>Add ToDo</h5>
          <hr/>
          <form onSubmit={ handleSubmit }>
            <input
              autoComplete="off"
              className="form-control"
              name="description"
              onChange={ handleChage }
              placeholder="To Do..."
              type="text"
              value={ description }
            />
            
            <button
              className="btn btn-outline-primary mt-2 btn-block"
              type="submit"
            >
              Add
            </button>

          </form>

        </div>
      </div>


    </div>
  )
}
