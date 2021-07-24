import { mount } from "enzyme"
import { HomeScreen } from "../../../Components/09-useContext/HomeScreen"
import { UserContext } from "../../../Components/09-useContext/UserContext";

describe('test on <HomeScreen/>', () => {
    
    const user = {
        name: 'smog',
        email: 'smog@gmail.com'
    }
    const wrapper = mount(
        <UserContext.Provider value = {{user}}> 
            <HomeScreen/>
        </UserContext.Provider>
    );
    
    test('should be display to match with the snapshot', () => {
        expect( wrapper ).toMatchSnapshot();    
    })
    
})
