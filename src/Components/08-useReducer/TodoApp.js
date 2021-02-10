import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

import './styles.css';

export const TodoApp = () => {

  const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
  }

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);
  
  useEffect(() => {
    localStorage.setItem( 'todos', JSON.stringify(todos) );
  }, [todos])

  return (
    <div>
      <h1>Todos ({todos.length})</h1>
      <hr/>

      <div className="row">
        <div className="col-7">

          <TodoList
            todos={todos}
            dispatch={dispatch}
          />
  
        </div>
        <div className="col-5">

          <h5>Add ToDo</h5>
          <hr/>
          
          <TodoForm
            dispatch={dispatch}
          />
         
        </div>
      </div>


    </div>
  )
}
