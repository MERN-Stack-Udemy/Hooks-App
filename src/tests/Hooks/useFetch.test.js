import { useFetch } from "../../Hooks/useFetch"
import { renderHook } from '@testing-library/react-hooks'

describe('Test on custom hook useFetch()', () => {
  
  test('should to return defalut state', () => {
    const {result} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    const {data, error, loading } = result.current;

    expect( data ).toBe( null );
    expect( error ).toBe( null );
    expect( loading ).toBe( true );
  })

  test('should to return data.length =1, error = null, loading = false', async() => {
    const {result, waitForNextUpdate} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotesjd'))
    await waitForNextUpdate();
    
    const {data, error, loading } = result.current;

    expect( data ).toBe( null);
    expect( loading ).toBe( false );
    expect( error ).toBe( 'request could not be fulfilled' );
  })
  
})
