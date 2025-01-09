import '../styles/header.css';


function Header({highScore, currentScore}) {
    return <div className='header'>
        <h1>Memory Game</h1>
        <div>
            <p>Earn points by clicking on an image without selecting the same image twice!</p>
            <p>High Score: {highScore}</p>
            <p>Current Score: {currentScore}</p>
        </div>

    </div>
}

export default Header;