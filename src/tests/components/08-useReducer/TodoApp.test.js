import { mount, shallow } from "enzyme"
import { act } from "react-dom/test-utils";
import { TodoApp } from "../../../Components/08-useReducer/TodoApp"
import { demoTodos } from "../fixtems/demoTodos";

describe('test on <TodoApp/>', () => {
    
    const wrapper = shallow(<TodoApp/>);
    Storage.prototype.setItem = jest.fn(() => {});

    test('should be match to snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should add a new TODO', () => {
        const wrapper = mount(<TodoApp/>);
        act(() => {
            wrapper.find('TodoForm').prop('dispatch')({
                type:'ADD',
                payload: demoTodos[0],
            });
            wrapper.find('TodoForm').prop('dispatch')({
                type:'ADD',
                payload: demoTodos[1],
            });
        })
        expect(wrapper.find('h1').text().trim() ).toEqual(`Todos (2)`)
        // when TodoForm add a new TODO, localStorage is called for save todos one by one
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    })
    
    test('should be delete one TODO', () => {
        wrapper.find('TodoForm').prop('dispatch')({ type: 'ADD', payload: demoTodos[0]});
        wrapper.find('TodoList').prop('dispatch')({ type: 'DELETE', payload: demoTodos[0].id});

        expect(wrapper.find('h1').text().trim() ).toEqual(`Todos (0)`);
    })
})
