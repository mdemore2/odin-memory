import { useState } from "react";
import Card from "./Card";

function Board({highScore, updateHighScore, currentScore, updateCurrentScore, imageURLs}){
    
    console.log(imageURLs);

    const [imagesLeft, setImagesLeft] = useState([]);
    
    
    
    return <div className="board">
        {imageURLs.map((imageURL) => {
            return <Card key={imageURL} imageURL={imageURL} />
        })}

    </div>
}

export default Board;