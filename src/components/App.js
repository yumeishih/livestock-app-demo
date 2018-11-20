import React from 'react'
import NavBar from 'Components/navigationBar'
import Calculator from 'Components/calculator'
import Registration from 'Components/registration'
import Record from 'Components/record'
import AboutUs from 'Components/aboutUs'
import ContactUs from 'Components/contactUs'
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'
import Footer from 'Components/footer'

const App = () => {
  return (
    <div>
      <ScrollUpButton />
      <NavBar />
      <Calculator />
      <Registration />
      <Record />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
