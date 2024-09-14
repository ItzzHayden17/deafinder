import React, { useEffect } from 'react'

const Footer = () => {
    var year = new Date().getFullYear() 

  return (
    <div className='Footer'>
        <p>{year} - Deafinder</p>
    </div>
  )
}

export default Footer