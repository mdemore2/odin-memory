function Card({imageURL, handleCardClick}){
    return <div className="card">
        <img src={imageURL} id={imageURL} onClick={event => handleCardClick(event)}/>
    </div>
}

export default Card;