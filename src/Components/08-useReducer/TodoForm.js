import React from "react";
import { useForm } from "../../Hooks/useForm";

export const TodoForm = ({ dispatch }) => {

  const [ { description }, handleChage, reset ] = useForm({
    description:''
  });

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

    dispatch({
      type: 'ADD',
      payload: newToDo
    });
    reset();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="form-control"
        name="description"
        onChange={handleChage}
        placeholder="To Do..."
        type="text"
        value={description}
      />

      <button className="btn btn-outline-primary mt-2 btn-block" type="submit">
        Add
      </button>
    </form>
  );
};
