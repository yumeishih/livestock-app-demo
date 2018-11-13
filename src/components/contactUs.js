import React from 'react'
import { ICDF_LINK } from 'Utils/const'

const ContactUs = () => {
  return (
    <div className="container" id="contact">
      <h3 className="text-center">Contact Us</h3>
      <p className="text-center"><em>Please feel free to contact Us!</em></p>
      <div className="row contact-content">
        <div className="icdf-logo text-center">
          <a href={ICDF_LINK}><img src="src/assets/picture/icdf_logo_1.png" alt="ICDF LOGO" /></a>
        </div>
        <div>
          <p><span className="glyphicon glyphicon-map-marker" /> Central Farm, Cayo, Cayo, Belize</p>
          <p><span className="glyphicon glyphicon-phone" /> Phone: +00 00000000</p>
          <p><span className="glyphicon glyphicon-envelope" /> Email: mail@mail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
