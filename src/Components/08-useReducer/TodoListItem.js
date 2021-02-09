import React from 'react'

export const TodoListItem = ({ todo, index, dispatch}) => {
  
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
    <li
      className='list-group-item'
    >
      <p
        className={ `${ todo.done && 'complete'}`}
        onClick={()=> handleToggle( todo.id )}
      >{index+1}. {todo.desc}</p>
      <button 
        className="btn btn-danger"
        onClick= { () => handleDelete(todo.id) }
      >Delete</button>
    </li>
  )
}
