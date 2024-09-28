import React from 'react'
import { motion } from 'framer-motion'

const DonateButtonContainer = (props) => {
    function handleClose(){
        props.onClick(false)
    }
  return (
    <div className='DonateButtonContainer'>
        <span onClick={handleClose}>x</span>
    <motion.div
    initial={{opacity:0 , scale:1.3}}
    animate={{ opacity: 1 ,scale:1}}
    transition={{duration: 0.1 }}>
    
        <div className="buttons">
        <a href="https://paypal.me/deafinder?country.x=ZA&locale.x=en_US" className='paypal'><i class="bi bi-paypal"></i> Paypal</a>
        <a href="https://www.buymeacoffee.com/sonyanray7m" className='card'><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=🙌&slug=sonyanray7m&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>
        </div>

    </motion.div>
    </div>
  )
}

export default DonateButtonContainer