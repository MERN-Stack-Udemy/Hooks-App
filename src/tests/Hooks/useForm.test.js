import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../Hooks/useForm'

describe('Test on custom hook -> useForm', () => {
  
  const initialForm = {
    name: 'Pedro Canedo',
    email: 'pedrocanedo@gmail.com'
  }

  test('should to return default form', () => {
    const {result} = renderHook( () => useForm(initialForm) );
    const [formState, handleChange, reset] = result.current;
    expect( formState ).toEqual( initialForm );
    expect( typeof handleChange ).toBe( 'function' );
    expect( typeof reset ).toBe( 'function' );
    
  })

  test('should change value on form (change name)', () => {
    const {result} = renderHook( () => useForm(initialForm) );
    const [, handleChange] = result.current;
    
    act(() => handleChange({
      target: {
      name:'name',
      value: 'Fernando'  
    }}))

    const [ formState ] = result.current;
    expect( formState ).toEqual({...initialForm, name: 'Fernando'} )
  })
  
  test('should change value on form (change email)', () => {
    const {result} = renderHook( () => useForm(initialForm) );
    const [, handleChange] = result.current;
    
    act(() => handleChange({
      target: {
      name:'email',
      value: 'canedo234@gmail.com'  
    }}))

    const [ formState ] = result.current;
    expect( formState ).toEqual({...initialForm, email: 'canedo234@gmail.com'} )
  })

  test('should to restore form using RESET', () => {
    const {result} = renderHook( () => useForm(initialForm) );
    const [,handleChange , reset] = result.current;
    
    act(() => {
      handleChange({
        target: {
          name:'email',
          value: 'canedo234@gmail.com'  
        }
      });

      reset()
    })

    const [ formState ] = result.current;
    expect( formState ).toEqual( initialForm )
  })
  
})
