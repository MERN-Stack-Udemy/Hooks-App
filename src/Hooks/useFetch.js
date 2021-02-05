import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {
 
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: true
  });  

  useEffect(() => {

    setState({ data:null, error:null, loading:true })
    fetch ( url )
      .then( resp => resp.json())
      .then( data => {
        setState({
          data,
          error: null,
          loading: false
        })
      })
      // .catch(e =>{
      //   setState({
      //     ...state,
      //     error: e.message
      //   })
      // });
  }, [url]);
  
  return state;
}
