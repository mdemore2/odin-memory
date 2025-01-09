import { useState } from "react";
import Card from "./Card";
import '../styles/board.css';


function Board({highScore, updateHighScore, currentScore, updateCurrentScore, imageURLs}){
    
    //console.log(imageURLs);
    const [imagesLeft, setImagesLeft] = useState([...imageURLs]);

    const shuffle = (array) => {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }
      

    const handleCardClick = (event) => {
        console.log('handle click fired');
        console.log(event.target.id);
        console.log(imagesLeft);
        if (imagesLeft.includes(event.target.id)) {
            setImagesLeft(imagesLeft.filter(a => a != event.target.src));
            updateCurrentScore(currentScore+1);
        } else {
            if (currentScore > highScore) {
                updateHighScore(currentScore);
            }
            updateCurrentScore(0);
            setImagesLeft([...imageURLs]);
        }

    }
    const shuffledURLs = [...imageURLs]
    shuffle(shuffledURLs);
    console.log(shuffledURLs)
    
    return <div className="board">
        {shuffledURLs.map((imageURL) => {
            return <Card key={imageURL} imageURL={imageURL} handleCardClick={handleCardClick}/>
        })}

    </div>
}

export default Board;