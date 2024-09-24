import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"

const Card = (props) => {

    const [active,setActive] = useState(false)
    function handleSocials(){
        setActive(true)
        setTimeout(()=>{
            setActive(false)
        },8000)
    }

    function handleFavorite(e){
        props.onClick(e.target.id)
        
    }
  return (
    
    <div className='Card' onClick={handleSocials} onMouseEnter={handleSocials} onMouseLeave={() =>{setActive(false)}}>
        <motion.div
        initial={{opacity:0 , scale:0.9}}
        animate={{ opacity: 1 ,scale:1}}
        transition={{duration: 0.4 }}>

        <div className="header">{props.name}</div>
        <div className="img-container">
        <img src={props.cover} alt=""  />
        </div>
        <div className="footer">{props.contentType} {props.favorite ? <i id={props.id} class="bi bi-balloon-heart-fill" onClick={handleFavorite}></i> : <i id={props.id} class="bi bi-balloon-heart" onClick={handleFavorite}></i>}
        </div>
        {active? <>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.4}}>
            <div className="socials">
            <div className="links">
                {props.insta == undefined ? <></> : <a href={props.insta}><i class="bi bi-instagram"></i></a>}
                {props.fb == undefined ? <></> : <a href={props.fb}><i class="bi bi-facebook"></i></a>}
                {props.tiktok == undefined ? <></> : <a href={props.tiktok}><i class="bi bi-tiktok"></i></a>}
            </div>
            </div>
            </motion.div>
        </> : <></>}
        </motion.div>
    </div>

  )
}

export default Card