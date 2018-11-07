import React from 'react'
import { ICDF_LINK } from 'Utils/const'

const Header  = () => {
  return (
    <header className="header">
			<p className="title">LiveStock</p>
			<a href={ICDF_LINK} alt="ICDF LINK">
				<img src="./src/assets/picture/icdf_logo_1.png" alt="ICDF LOGO" className="icdf-logo"/>
			</a>
    </header>
  )
}

export default Header