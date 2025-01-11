import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Filter from './components/Filter';
import Footer from './components/Footer';
import creatorsData from './python-data.json'; // Assuming this is the correct path
import { useAddToHomescreenPrompt } from './components/addToHomeScreen';
import DonateButtonContainer from './components/DonateButtonContainer';
import {isMobile} from 'react-device-detect';

function App() {
    const [data, setData] = useState(creatorsData);
    const [favoriteArray, setFavoriteArray] = useState([]);
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isAppInstalled, setIsAppInstalled] = useState(false);
    const [donateState,setDonateState] = useState(false)

    function handleData(e) {
        setData(e);
    }

    function handleFavorite(e) {
        const id = Number(e);
        if (favoriteArray.some((favId) => favId === id)) {
            const updatedFavorites = favoriteArray.filter((favId) => favId !== id);
            setFavoriteArray(updatedFavorites);
            Cookies.set('favArray', JSON.stringify(updatedFavorites), { expires: 7000000 });
        } else {
            setFavoriteArray((prev) => [...prev, id]);
            Cookies.set('favArray', JSON.stringify([...favoriteArray, id]), { expires: 7000000 });
        }
    }

    useEffect(() => {
        if (Cookies.get('favArray')) {
            setFavoriteArray(JSON.parse(Cookies.get('favArray')));
        }
        if (window.matchMedia('(display-mode: standalone)').matches) { 
          setIsAppInstalled(true) 
      }
    }, []); // Empty dependency array ensures this effect runs only once on initial render

    

    return (
        <div className="App">

        
        
        {!isAppInstalled ? (
          <button onClick={promptToInstall} className='add'>{isMobile ? <>Add to Home Screen</>:<>Add to Desktop</>}</button>
        ) : <></>}
            <Navbar/>
            <div className="container">
                <Filter onChange={handleData} />
                {data.map((creator) => (
                    <Card
                        key={creator.id}
                        id={creator.id}
                        name={creator.name}
                        cover={creator.cover}
                        contentType={creator.contentType}
                        insta={creator.insta_link}
                        fb={creator.fb_link}
                        tiktok={creator.tt_link}
                        youtube={creator.yt_link}
                        favorite={favoriteArray.some((id) => creator.id === id)}
                        onClick={handleFavorite}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
