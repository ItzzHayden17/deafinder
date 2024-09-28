import "../App.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navbar = (props) => {
  const location = useLocation().pathname
  const [donateState,setDonateState] = useState(false)
  function handleDonateButton(){
    if (donateState) {
      setDonateState(false)
    } else {
      setDonateState(true)
    }

    props.onClick(donateState)
  }
  return (
    <div className='Navbar'>
        <img src="/deafinder.png" alt="" width="200px" />
        <div className="buttons">
        <button>Contact us</button>
        <button onClick={handleDonateButton}>Donate</button>
        {location == "/favorite" ? <Link to="/"><button>Home</button></Link> : <Link to="/favorite"><button>Favorites</button></Link> }
        </div>
    </div>
  )
}

export default Navbar