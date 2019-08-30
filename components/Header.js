import React from 'react'
import logo from '../images/Trollface.png'

function Header() {
    return (
        <header>
            <img src={logo} 
            alt='Problem' />
            <p>Meme Generator</p>
        </header>
    )
}

export default Header