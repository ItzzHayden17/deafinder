import React from 'react'
import { useState } from 'react'
const Card = (props) => {

    const [active,setActive] = useState(false)
    function handleSocials(){
        setActive(true)
        setTimeout(()=>{
            setActive(false)
        },8000)
    }
  return (
    <div className='Card' onClick={handleSocials} onMouseEnter={handleSocials} onMouseLeave={() =>{setActive(false)}}>


        <div className="header">{props.name}</div>
        <div className="img-container">
        <img src={props.cover} alt=""  />
        </div>
        <div className="footer">{props.contentType}</div>
        {active? <>
            <div className="socials">
            <div className="links">
                {props.insta == undefined ? <></> : <a href={props.insta}><i class="bi bi-instagram"></i></a>}
                {props.fb == undefined ? <></> : <a href={props.fb}><i class="bi bi-facebook"></i></a>}
                {props.tiktok == undefined ? <></> : <a href={props.tiktok}><i class="bi bi-tiktok"></i></a>}
            </div>
        </div>
        </> : <></>}
    </div>
  )
}

export default Card