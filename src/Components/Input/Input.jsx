import React from 'react'
import './Input.scss';

function Input({type, placeholder, id}) {
  return (
    <div className='input'>
        <input type={type} id={id} placeholder={placeholder} />
        <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}

export default Input