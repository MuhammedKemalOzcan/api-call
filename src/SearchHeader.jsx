import React from 'react'
import { useState } from 'react';


function SearchHeader({onSubmit}) {

    const[value,setValue] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
    }
    const handleChange = (event) =>{
        setValue(event.target.value)
    }

  return (
    <div className='searchDiv'>
      <form onSubmit={handleFormSubmit} >
        <label>Ne Arıyorsunuz?</label>
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchHeader
