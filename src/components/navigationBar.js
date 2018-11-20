import React from 'react'

document.body.addEventListener('click', (event) => {
  const menu = document.getElementById('myNavbar')
  const ignoreList = ['navbar-toggle', 'icon-bar']
  if (!ignoreList.includes(event.target.className)) menu.style.display = 'none'
}, false)

const handleMenu = (event) => {
  const menu = document.getElementById('myNavbar')
  const navbar = document.getElementById('navbar')
  if (menu.style.display === 'block') {
    navbar.blur()
    menu.style.display = 'none'
  } else menu.style.display = 'block'
}

const NavBar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button id="navbar" type="button" className="navbar-toggle" onClick={handleMenu} >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#myPage">Snutrition</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#calculator">CALCULATOR</a></li>
            <li><a href="#registration">REGISTRATION</a></li>
            <li><a href="#record">RECORD</a></li>
            <li><a href="#aboutUs">ABOUT US</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
