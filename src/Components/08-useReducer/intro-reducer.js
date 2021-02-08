
const initialState = [{
  id: 1,
  todo: 'ir a correr',
  done: false
}];

const todoReducer = (state=initialState, action ) => {
  if(action?.type === 'ADD'){
    return [...initialState, action.payload ];
  }

  return state;
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'estudiar react',
  done: false
}

const addNewAction = {
  type: 'ADD',
  payload: newTodo,
  // dispatch
}

todos = todoReducer( todos, addNewAction );


console.log(todos); 