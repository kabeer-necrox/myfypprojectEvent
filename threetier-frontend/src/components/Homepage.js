import React from 'react'
import SigUp from './SignUp'
import Aboutus from './Aboutus'
import Contactus from './Contactus'

export default function Homepage() {
  return (
    <>
    
    <div className='homepage'>
        <h1 className='check'>GB Events</h1>
        <p className='homepageText'> Elevate Your Events in the Heart of the Himalayas</p>
         {/* <img src='https://pos.closetor.com/uploads/dress/PC_00186_rb27.jpg' alt='image'/> */}
        
    </div>
    <Aboutus />
    <SigUp />
    <Contactus />
    
    </>
    
  )
}
