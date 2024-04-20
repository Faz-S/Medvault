import React from 'react'
import './Drug.css'
function Drug() {
  return (
    <div className='Drug_container'>
      <h2>
        Drug-Drug Interaction Checker
      </h2>
      <p>
        Enter two drugs below to check for potential interactions
      </p>
      <div className='Drug_input_holder'>
        <p>Enter Drug 1</p>
        <input type='text' placeholder='Enter Drug 1'></input>
        <p>Enter Drug 2</p>
        <input type='text' placeholder='Enter Drug 2'></input>
      </div>
      <div className='Btn-holder'>
        <button className='btn-1'>
            Add another Drug +
        </button>
        <button className='btn-2'>
            Check Interaction
        </button>

       
      </div>
      <div className='L-links'>
        <a>Interaction</a>
        <a className='sc-link'>Moderate</a>
      </div>
      <div className='sc-box'>
        <h2>
            Mechanism of Drug Interaction
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam totam, ipsam vel assumenda pariatur harum repellat autem quibusdam reprehenderit accusamus commodi earum cupiditate impedit dolor delectus accusantium facilis suscipit nisi. Quae rerum iure sapiente exercitationem natus hic ab est ipsum quasi sint alias, nobis dolorem, voluptas explicabo commodi nulla placeat!
        </p>
      </div>

    </div>
  )
}

export default Drug
