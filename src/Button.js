import React from 'react'

const Button = ({text, dataState, setDataState}) => {

  return (
    <button onClick={() => {console.log(dataState); setDataState(text);}}>{text}</button>
  )
}

export default Button