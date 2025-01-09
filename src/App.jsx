import { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";

function App() {

  const [imageURLs, setImageURLs] = useState([]);

  const appendImageURLs = (newURL) => {
    setImageURLs(imageURLs => [...imageURLs, newURL]);
  };

  const cleanupImageURLs = () => {
    setImageURLs([]);
  }
  

  const fetchImage = async (seed, signal) => {
    const resp = await fetch(`https://picsum.photos/seed/${seed}/200`, {signal});
    const imgBlob = await resp.blob();
    const imgUrl = URL.createObjectURL(imgBlob);
    appendImageURLs(imgUrl)
  };

  useEffect(() => {
    console.log('Firing Effect')

    const controller = new AbortController();
    const signal = controller.signal;

    const imageSeeds = ['Serendipity', 'Zephyr', 'Oblivion', 'Celestial',
      'Vermillion', 'Quixotic', 'Mellifluous', 'Nocturnal', 'Wanderlust',];

    imageSeeds.forEach((seed) => {
        fetchImage(seed, signal);
    });

    return () => {
      console.log('Running cleanup')
      cleanupImageURLs();
      controller.abort();
    };

  },[]) //nothing in dependency array, only run on mount

  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const updateHighScore = (newScore) => () => {
    setHighScore(newScore);
  }

  const updateCurrentScore = (newScore) => () => {
    setCurrentScore(newScore);
  }

  return <div>
    <Header highScore={highScore} currentScore={currentScore}/>
    <Board highScore={highScore} updateHighScore={updateHighScore} 
      currentScore={currentScore} updateCurrentScore={updateCurrentScore} 
      imageURLs={imageURLs}/>
    
  </div>
}

export default App;
