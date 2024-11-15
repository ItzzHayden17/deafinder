import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import Cookies from 'js-cookie'
import Card from '../components/Card'
import creatorsData from "../python-data.json"

const Favorite = () => {

    const [favoriteArray,setFavoriteArray] =useState([])
    const [donateState,setDonateState] = useState(false)

    function handleFavorite(e){
        const id = Number(e)
        if (favoriteArray.some((id) => id == e)) {
            const updatedFavorites = favoriteArray.filter((favId) => favId !== id)
            setFavoriteArray(updatedFavorites)
            Cookies.set("favArray",JSON.stringify(updatedFavorites),{expires:7000000})
        }else{
          setFavoriteArray((prev)=> [...prev,id] )
          favoriteArray.push(id)
          Cookies.set("favArray",JSON.stringify(favoriteArray),{expires:7000000})
        }
        
      }

    useEffect(()=>{
        if (Cookies.get("favArray")) {
            setFavoriteArray(JSON.parse(Cookies.get("favArray")))
            console.log(Cookies.get("favArray"));
            
        }
        
    },[])
  return (
    <div className='App'>
        <Navbar />
        <div className="container">
        {creatorsData.map((creator)=>{
            const isFavorite = favoriteArray.some((id) => id === creator.id)
            return isFavorite ? (<Card id={creator.id} name={creator.name} cover={creator.cover} contentType={creator.contentType} insta={creator.insta_link} fb={creator.fb_link} tiktok={creator.tt_link} favorite={favoriteArray.some((id) => creator.id === id)} onClick={handleFavorite}/>) : null;
                })}
        </div>
    </div>
  )
}

export default Favorite