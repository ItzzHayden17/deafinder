
import './App.css';
import Navbar from './components/Navbar';
import data from "./python-data.json"
import Card from './components/Card';
import Filter from './components/Filter';

function App() {
  {console.log();
  }
  return (
    <div className="App">
      <Navbar />
      <Filter/>
      {data.map((creator)=>{
        console.log(creator);
        
        return(<Card name={creator.name} cover={creator.cover} contentType={creator.contentType} insta={creator.insta_link} fb={creator.fb_link} tiktok={creator.tt_link}/> )
      })}
    </div>
  );
}

export default App;
