import { useState } from "react";
import Card from "./Card";
import '../styles/board.css';


function Board({highScore, updateHighScore, currentScore, updateCurrentScore, imageURLs}){
    
    //console.log(imageURLs);
    const [imagesLeft, setImagesLeft] = useState([...imageURLs]);

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
    
    
    
    return <div className="board">
        {imageURLs.map((imageURL) => {
            return <Card key={imageURL} imageURL={imageURL} handleCardClick={handleCardClick}/>
        })}

    </div>
}

export default Board;