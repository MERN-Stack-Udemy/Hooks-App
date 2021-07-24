import { mount } from "enzyme"
import { LoginScreen } from "../../../Components/09-useContext/LoginScreen"
import { UserContext } from "../../../Components/09-useContext/UserContext"

describe('test on <LoginScreen/> component', () => {
    
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen/>
        </UserContext.Provider>
    )

    test('should be math to snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should call \'setUser\' with argument', () => {
        wrapper.find('button').simulate('submit');
        expect( setUser ).toHaveBeenCalledWith({id: 123, name: 'smog'});
    })
    
    
})
