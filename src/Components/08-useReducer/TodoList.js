import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, dispatch}) => {
  return (
    <ul className="list-group list-group-flush">
      {
        todos.map( (todo, index) => (
          <TodoListItem 
            dispatch={dispatch}
            index={index}
            key = {todo.id}
            todo={todo}
          />
        ) )
      }
    </ul>
  )
}
