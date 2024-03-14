import React from 'react'

export const Button = (props) => {
  return (
    <div className='btn'>
        <button onClick={props.onClick}>{props.value}</button>
    </div>
  )
}
