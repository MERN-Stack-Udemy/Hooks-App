import { shallow } from "enzyme"
import { TodoList } from "../../../Components/08-useReducer/TodoList"
import { demoTodos } from "../fixtems/demoTodos"

describe('Tests on <TodoList />', () => {
  
  const wrapper = shallow( <TodoList todos={ demoTodos }/>)

  test('should match to snapshot', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('should display all todos', () => {
    
  })
  
})
