import '../styles/header.css';


function Header({highScore, currentScore}) {
    return <div className='header'>
        <h1>Memory Game</h1>
        <div>
            <p>Earn points by clicking on an image without selecting the same image twice!</p>
            <p><strong>High Score: {highScore}</strong></p>
            <p><strong>Current Score: {currentScore}</strong></p>
        </div>

    </div>
}

export default Header;