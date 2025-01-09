function Header({highScore, currentScore}) {
    return <div className='Header'>
        <h1>Memory Game</h1>
        <p>Earn points by clicking on an image without selecting the same image twice!</p>
        <p>High Score:{highScore}</p>
        <p>Current Score:{currentScore}</p>

    </div>
}

export default Header;