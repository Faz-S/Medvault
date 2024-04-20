import React,{useState} from 'react'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import './Navbar.css'
import logo from './med.png'
function Navbar() {
    const[Toggle,setToggle]=useState(false);
    return (
    <>
    <div className='nav_container'>
        {/* <div className='toggle  '>
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
        </div> */}
        <div className='navv_container'>
                <a>Case Sheet</a>
                <a>Visit history</a>
                <a>Orders and Procedures</a>
                <a href='/Prescription'>Prescription</a>
                <a>Discharge Summary</a>
                <a>Allergies</a>
                <a>Diagnostic History</a>
                <a>Examination</a>
                <a>File Request Permission</a>    
        </div>
    </div>
    
    
    </>)}
    
    
  

  
 
   


export default Navbar
