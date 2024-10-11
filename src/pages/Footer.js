import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='servicefooter'>
            Car Washing<br/>
            Car Reparing<br/>
            Car Modify<br/>
            Car Cleanig<br/>
            Car Oil Repair<br/>
            Car Air<br/><br/>
        </div>
        <div className='copyright'>
        © 2024 Car Wash Center. All Rights Reserved.
        </div><br/>
        <div className='socialmidea'>
            <FaWhatsapp/> <FaInstagram/> <FaTwitter/> <FaFacebook/> <FaYoutube/> 
        </div>
    </div>
  )
}

export default Footer