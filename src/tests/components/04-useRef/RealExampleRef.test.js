import { shallow } from "enzyme"
import { RealExampleRef } from "../../../Components/04-useRef/RealExampleRef"

describe('Test on <RealExampleRef />', () => {
  
  test('should display the component correctly', () => {
    const wrapper = shallow( <RealExampleRef /> );
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
    expect( wrapper ).toMatchSnapshot();
  })

  test('should display the <MultipleCustomHooks/> ', () => {
    const wrapper = shallow( <RealExampleRef /> );
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
    expect( wrapper ).toMatchSnapshot();
  })
  
  
})
