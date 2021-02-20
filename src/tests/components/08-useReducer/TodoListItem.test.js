import { shallow } from "enzyme"
import { TodoListItem } from "../../../Components/08-useReducer/TodoListItem"
import { demoTodos } from "../fixtems/demoTodos";

describe('test on TodoListItem', () => {

  const index = 0
  const dispatch = jest.fn();

  const wrapper = shallow( 
    <TodoListItem
      todo={ demoTodos[ index ] }
      index={ index }
      dispatch = { dispatch }
    />
  );
  
  test('should match to snapshot', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('should call dispatch DELETE', () => {
    wrapper.find('button').simulate('click');
    expect( dispatch ).toHaveBeenCalledWith( { type: 'DELETE', payload: demoTodos[index].id });
    expect( dispatch ).toHaveBeenCalledTimes( 1 );
  })
  
  test('should call dispatch TOGGLE', () => {
    wrapper.find('p').simulate('click');
    expect( dispatch ).toHaveBeenCalledWith( { type: 'TOGGLE', payload: demoTodos[index].id });
    expect( dispatch ).toHaveBeenCalledTimes( 1 );
  })

  test('should doisplay correctly text', () => {
    expect( wrapper.find('p').text().trim() ).toBe( `${index+1}. ${demoTodos[index].desc}` );
  })

  test('should p cointains the className = \'complete\' ', () => {
    const todo = demoTodos[index];
    todo.done = true;
    const wrapper = shallow( 
      <TodoListItem
        todo={ todo }
        index={ index }
      />
    );
    expect( wrapper.find('p').hasClass('complete') ).toBe( true );
  })
  
})
