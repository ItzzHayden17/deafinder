
import './App.css';
import Navbar from './components/Navbar';
import creatorsData from "./python-data.json"
import Card from './components/Card';
import Filter from './components/Filter';
import Footer from './components/Footer';
import { motion } from "framer-motion"
import { useState } from 'react';

function App() {

  const [data,setData] = useState(creatorsData)

  function handleData(e){
    if (e == null) {
      setData(creatorsData)
    }else{
      setData(e)
    }
    
  }

  return (
    <div className="App">
      <Navbar />
      <Filter onChange={handleData}/>
      {data.map((creator)=>{
        return(
          <>

          <Card name={creator.name} cover={creator.cover} contentType={creator.contentType} insta={creator.insta_link} fb={creator.fb_link} tiktok={creator.tt_link}/>

          </>
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
