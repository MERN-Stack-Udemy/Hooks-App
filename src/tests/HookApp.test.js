import { shallow } from "enzyme"
import { HookApp } from "../HookApp"

describe('Test HookApp component', () => {
  
  test('should snapshot component', () => {
    const wrapper = shallow( <HookApp/> );
    expect( wrapper ).toMatchSnapshot();
  })
  
})
