import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {
 
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true
  });  

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    setState({ data:null, error:null, loading:true })
    if(isMounted){

      fetch ( url )
        .then( resp => resp.json())
        .then( data => {
  
            if(isMounted.current){
              setState({
                data,
                error: null,
                loading: false
              });
            }
      
        });
    }
  }, [url]);
  
  return state;
}
