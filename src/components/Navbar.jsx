import "../App.css"
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src="/logo-no-bg.png" alt="" width="200px" />
        <div className="buttons">
        <button>Contact us</button>
        <button>Get Listed</button>
        </div>
    </div>
  )
}

export default Navbar