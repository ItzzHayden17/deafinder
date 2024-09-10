import React, { useEffect } from 'react'

const Footer = () => {
    var year = new Date().getFullYear() 

  return (
    <div className='Footer'>
        {year} - Deafinder
    </div>
  )
}

export default Footer