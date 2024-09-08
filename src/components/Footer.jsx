import React, { useEffect } from 'react'

const Footer = () => {
    var year = new Date().getFullYear() 

  return (
    <div className='Footer'>
        {year} - Anray Hayden
    </div>
  )
}

export default Footer