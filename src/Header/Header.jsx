import React,{useState} from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../med.png'
import './Header.css'
import '../components/Navbar/Navbar.css'
function Header() {
  const[Toggle,setToggle]=useState(false);
  return (<>
  <div className='header_container'> 
  <div className='toggle'>
        {Toggle
        ? <RiCloseLine color='#6C0345' size={30} onClick={()=> setToggle(false)}/>
        : <RiMenu3Line color='#6C0345' size={30} onClick={()=> setToggle(true)}/>}
        {Toggle && (
            <div className='elements slide-in-left'>
                <div className='header'>
                    <img className='img_1' src={logo}></img>
                    <h1>
                        <span className='span_1' >
                        Med
                        </span>
                        <span className='span_2'>
                        vault
                        </span>
                    </h1>
                </div>  
                <ul className='links'>
                    <a href='#'><i className='fas fa-laptop'></i>EMR</a>
                    <a href='#'><i className='fas fa-hospital'></i>Administration</a>
                    <a href='#'><i className='fas fa-heart'></i>Reports</a>
                    <a href='#'><i className='fas fa-flag'></i>Reports</a>
                    <a href='#'><i className='fas fa-folder'></i>Ward Management</a>
                    <a href='#'><i className='fas fa-comments'></i>Inventory</a>
                    <a href='#'><i className='fas fa-pills '></i>Inventory Reports</a>
                    <a href='#'><i className='fas fa-home '></i>LIS</a>
                    <a href='#'><i className='fas fa-phone '></i>Billings</a>
                </ul>
                
            </div>
          )} 
    </div>
    <div style={{cursor:"pointer"}}>
      <a href="/Voice">  <i className='fas fa-'>voice</i></a>
    </div>
    <div className='Buttons'>
      
      <button >
        Logout
      </button>
      <button >
        Help
      
      </button>
    </div>

  </div>
   
  </>
    
  )
}

export default Header
