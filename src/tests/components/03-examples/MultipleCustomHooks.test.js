import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../Components/03-examples/MultipleCustomHooks'
import { useCounter } from '../../../Hooks/useCounter';
import { useFetch } from '../../../Hooks/useFetch';

jest.mock('../../../Hooks/useFetch');
jest.mock('../../../Hooks/useCounter');


describe('test on MultipleCustomHooks', () => {

  beforeEach( () => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
      decrement: () => {}
    });
  })


  test('should to match snapshot', () => {
    useFetch.mockReturnValue({
      data: null,
      loading:true,
      error:null
    })

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect( wrapper ).toMatchSnapshot();
  })

  test('should display the information', () => {
    
    useFetch.mockReturnValue({
      data: [{
        author: 'Abdiel',
        quote: 'hola mundo'
      }],
      loading:false,
      error:null
    })
    const wrapper = shallow( <MultipleCustomHooks/> );

    expect( wrapper.find('.alert').exists() ).toBe(false);
    expect( wrapper.find('.mb-2').text().trim() ).toBe( 'hola mundo' );
    expect( wrapper.find('footer').text().trim() ).toBe( 'Abdiel' );

  })
  
  
})
