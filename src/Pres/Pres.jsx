import React from 'react'
import './Pres.css'
function Pres() {
  return (<>
    <div className='Container_pres'>
      <div className='desc'>
        <h2>
            Prescription
        </h2>
        <p>
            Complete the Fields below to prescribe the drug
        </p>
      </div>
      <div className='holder'>
      <div className='inp'>
        <p>Drug name</p>
        <input type='text' placeholder='Enter drug name'></input>
        <p style={{marginRight:"3.6rem"}}>Route</p>
        <input type='text' placeholder='Enter Route'></input>
        
      </div>
      
      <div className='inp'>
        <p style={{marginRight:"2.8rem"}}>Dose</p>
        <input type='text' placeholder='Enter  Dose'></input>
        <p style={{marginRight:"1.5rem"}}> Start Date</p>
        <input className="date" type='date' ></input>
        
      </div>
      <div className='inp'>
        <p style={{marginRight:"0.1rem"}}>Frequency</p>
        <input type='text' placeholder='Enter Frequency'></input>
        <p >Food Relation</p>
        <select >
            <option value="">
                Select
            </option>
            
        </select>
        
      </div>
      <div className='inp'>
        <p style={{marginRight:"1rem"}}>Duration</p>
        <input type='text' placeholder='Enter Duration'></input>
        <p >Order</p>
        <select style={{marginLeft:"3.7rem"}}>
            <option value="">
                Select
            </option>
            
        </select>
        
      </div>
      <div>
        <p>Instruction</p>
        <textarea className='text' placeholder='Enter Instruction'></textarea>
      </div>  
      </div>
      <div className='sub'><input  value="Enter"type='submit'></input></div>
      
      <div className='ab'>
        <h2>
            Details
        </h2>
        <p>
            More details about the prescription
        </p>
        <div className='Dethold'>
        <div className='inps'>
            <h4>Prescriber</h4>
            <p>
                Fr.Rick Roe
            </p>
            <h4>Clinic</h4>
            <p>
              Mapple Medicine Center
            </p>

        </div>
        <div className='inps'>
            <h4 style={{marginRight:"1.6rem"}}>Patient</h4>
            <p>
              Jane
            </p>
            <h4 style={{marginRight:"0.8rem"}}>Date of birth</h4>
            <p>
                May 22,2005
            </p>

        </div>
        </div>
        
      </div>
      {/* <div className='inp'>
        <p>Drug name</p>
        <input type='text' placeholder='Eneter drug name'></input>
        <p>Drug name</p>
        <input type='text' placeholder='Eneter drug name'></input>
        
      </div>
      
      <div className='inp'>
        <p>Drug name</p>
        <input type='text' placeholder='Eneter drug name'></input>
        <p>Drug name</p>
        <input type='date' placeholder='Eneter drug name'></input>
        
      </div>
      <div className='inp'>
        <p>Drug name</p>
        <input type='text' placeholder='Eneter drug name'></input>
        <p>Drug name</p>
        <select>
            <option value="">
                Select
            </option>
            
        </select>
        
      </div>
      <div className='inp'>
        <p>Drug name</p>
        <input type='text' placeholder='Eneter drug name'></input>
        <p>Drug name</p>
        <select>
            <option value="">
                Select
            </option>
            
        </select>
        
      </div>
      <div>
        <p>Intruction</p>
        <textarea placeholder='Enter Instruction'></textarea>
        
      </div>
      <input type='submit'></input>
      <div className='ab'>
        <h2>
            Details
        </h2>
        <p>
            More details about the prescription
        </p>
        <div className='inp'>
            <h3>Prescriber</h3>
            <p>
                Fr.Rick Roe
            </p>
            <h3>Clinic</h3>
            <p>
                Mapple Medicine Center
            </p>

        </div>
        <div className='inp'>
            <h3>Patient</h3>
            <p>
                Jane
            </p>
            <h3>Date of birth</h3>
            <p>
                May 22,2005
            </p>

        </div> */}

       
      </div>

    
  </>
    
  )
}

export default Pres
