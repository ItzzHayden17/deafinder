
import './App.css';
import Navbar from './components/Navbar';
import creatorsData from "./python-data.json"
import Card from './components/Card';
import Filter from './components/Filter';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
function App() {

  const [data,setData] = useState(creatorsData)
  const [favoriteArray,setFavoriteArray] =useState([])

  function handleData(e){
    setData(e)
  }

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
    }
  })

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
      <Filter onChange={handleData}/>
      {data.map((creator)=>{
        return(
          <> 
          <Card id={creator.id} name={creator.name} cover={creator.cover} contentType={creator.contentType} insta={creator.insta_link} fb={creator.fb_link} tiktok={creator.tt_link} favorite={favoriteArray.some((id) => creator.id === id)} onClick={handleFavorite}/>
          </>
        )
      })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
