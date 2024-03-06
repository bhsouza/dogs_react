import React from 'react'

const Error = ({error}) => {

  if (!error) return null
  return (
    <p style={{color: '#f31', margin: '1.6rem 0', fontSize: '1.6rem'}}>{error}</p>
  )
}

export default Error