import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../Hooks/useCounter'

describe('Test on custom hook useCounter ', () => {
  
  test('should to return default values', () => {
    const {result} = renderHook( () => useCounter() )
    
    expect( result.current.counter ).toBe( 10 );
    expect( typeof result.current.decrement ).toBe( 'function' );
    expect( typeof result.current.increment ).toBe( 'function' );
    expect( typeof result.current.reset ).toBe( 'function' );

  })

  test('should to return counter value equal 100', () => {
    const {result} = renderHook( () => useCounter(100) )
    expect( result.current.counter ).toBe( 100 );
  })

  test('should to return increment by one -> 51', () => {
    const { result } = renderHook( () => useCounter(50) )
    const { increment }= result.current;
    act( () => increment() );

    expect( result.current.counter ).toBe( 51);
  })

  test('should to return decrement by one -> 49', () => {
    const { result } = renderHook( () => useCounter(50) )
    const { decrement }= result.current;
    act( () => decrement() );

    expect( result.current.counter ).toBe( 49);
  })

  test('should to return initial value when calls reset', () => {
    const { result } = renderHook( () => useCounter(70) )
    const { increment }= result.current;
    const { reset }= result.current;

    act( () => increment() );
    expect( result.current.counter ).toBe( 71);
    
    act( () => reset() );
    expect( result.current.counter ).toBe( 70);
  })
  
})
