import React from 'react'
import Header from "../Header/Header";
import './Prescription.css'
import Pres from '../Pres/Pres';
import Drug from '../Drug/Drug';
function Prescription() {
  return (<>
   <div >
      <Header/>
      <div className='Pres'>
        <Pres/>
        <Drug/>
      </div>
    </div>
  </>
   
  )
}

export default Prescription

