import {shallow} from 'enzyme';
import { TodoForm } from '../../../Components/08-useReducer/TodoForm';

describe("test on Todo Form add todo", () => {
  
  const dispatch = jest.fn();

  const wrapper = shallow(
    <TodoForm
      dispatch = {dispatch}
    />
  );

  test("should be display correctly", () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('not should call \'dispatch\' function', () => {

      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({ preventDefault(){} });
      expect( dispatch ).toHaveBeenCalledTimes(0);

  })

  test('should call \'handleSubmit\' with one argument', () => {
    
    const value = 'learn React';
    wrapper.find('input').simulate('change',{
      target:{
        value,
        name: 'description'
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({ preventDefault(){} });
      expect( dispatch ).toHaveBeenCalledTimes(1);
      expect( dispatch ).toBeCalledWith( expect.any(Object) );
      expect( dispatch ).toBeCalledWith({
        type : 'ADD',
        payload :{
          id : expect.any(Number),
          desc : value,
          done : false
        }
      });
      // when submit is called, also call 'useForm.reset()', then the value of input shold it's empty
      expect( wrapper.find('input').prop('value') ).toBe('');
  })
  
  
});
