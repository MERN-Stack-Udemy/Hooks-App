import { mount } from "enzyme";
import { AppRouter } from "../../../Components/09-useContext/AppRouter";
import { UserContext } from "../../../Components/09-useContext/UserContext";

describe('test on <AppRouter/>', () => {
    
    const user = {
        id: 1,
        name : 'smog'
    } 
    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter/>
        </UserContext.Provider>
    )
    
    test('should match to snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })


    
})
