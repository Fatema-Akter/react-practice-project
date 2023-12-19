import React from 'react'
import logo from '../logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className=''>
            
            </div>
            <div className='textRight'>
                <img className='logo-image' src={logo} alt="Logo" />
                <strong>React</strong>
            </div>
        </div>
    </div>
  )
}

export default Header