import { shallow } from "enzyme"
import { TodoList } from "../../../Components/08-useReducer/TodoList"
import { demoTodos } from "../fixtems/demoTodos"

describe('Tests on <TodoList />', () => {
  
  const dispatch = jest.fn();
  const wrapper = shallow( 
    <TodoList 
      todos={ demoTodos }
      dispatch = { dispatch }
    />
  )

  test('should match to snapshot', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('should display all ToDos', () => {
    expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
  })

  test('should cointains all properties on <TodoListItem/>', () => {
    const index = 0;
    expect( wrapper.find('TodoListItem').at(index).prop('dispatch') ).toEqual( expect.any(Function) );
    expect( wrapper.find('TodoListItem').at(index).prop('todo') ).toEqual( demoTodos[index] );
  })
  
  
})
