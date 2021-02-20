import { todoReducer } from "../../../Components/08-useReducer/todoReducer";
import { demoTodos } from "../fixtems/demoTodos";

describe('test on todoReduser ', () => {

  test('should return initial state', () => {
    const state = todoReducer( demoTodos, {} );
    expect( state ).toEqual( demoTodos );
  })

  test('should to ADD a new ToDo', () => {
    const newToDo = {
      id: 3,
      desc: 'learn React Native',
      done: false
    };

    const state = todoReducer( demoTodos, {type: 'ADD', payload: newToDo});
    expect( state.length ).toBe( 3 )
    expect( state ).toEqual( [...demoTodos, newToDo ] );

  })
  
  test('should DELETE a todo using ID', () => {
    const ID = 1
    const state = todoReducer( demoTodos, {type: 'DELETE', payload: ID});
    expect( state.length ).toBe( 1 )
    
    expect( state ).toEqual([ demoTodos[1] ]);
  })
  
  test('should to make a TOGGLE on TODO', () => {
    const ID = 2
    const state = todoReducer( demoTodos, {type: 'TOGGLE', payload: ID});
    expect( state.length ).toBe(2);
    expect( state[1].done ).toBe( !demoTodos[1].done);
  })
  
})
 