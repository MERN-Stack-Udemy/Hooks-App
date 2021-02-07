import React from 'react'

export const Small = React.memo( ({value}) => {

  console.log('Small Component called');
  return (
    <small>
      {value}
    </small>
  )
})
