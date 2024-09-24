import "../App.css"
import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const Navbar = () => {
  const location = useLocation().pathname
  
  
  return (
    <div className='Navbar'>
        <img src="/deafinder.png" alt="" width="200px" />
        <div className="buttons">
        <button>Contact us</button>
        <button>Get Listed</button>
        {location == "/favorite" ? <Link to="/"><button>Home</button></Link> : <Link to="/favorite"><button>Favorites</button></Link> }
        </div>
    </div>
  )
}

export default Navbar