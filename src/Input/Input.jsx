import React from 'react'
import './Input.css'
function Input() {
  return (<>
    <div className='inputs'>
      
      <input type="text" placeholder='Find By Patient Name'></input>
      <input type="text" placeholder='Find By Health ID'></input>
      <input type="text" placeholder='Find By IP Number'></input>
      <input type="text" placeholder='Find By Bed Number'></input>
      <button className='btn_1'>
        Search
      </button>
      <button className='btn_2'>
        Clear
      </button>
    </div>
  </>
    
  )
}

export default Input
