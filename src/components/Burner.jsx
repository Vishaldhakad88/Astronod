import React from 'react';
import './burner.css'; // Make sure you use this file
import burnarimg from '../assets/burnarimg.jpeg';

function Burner() {
  return (
    <div className="Container">
      <img className='burnarimg' src={burnarimg} alt="" />
      
      <div className="overlayText">Welcome to <span style={{color:'orangered'}}>Astro </span> <br /> <span style={{color:'orange'}}>Vedic Pujas</span></div>
    </div>
  );
}

export default Burner;
