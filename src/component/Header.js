import React from 'react'

import logo from '../assets/img/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='Logo'/>
            <div>
                <p>Connect</p>
                <p>Météo</p>
            </div>
            <p>La météo des champions!</p>
        </header>
    )
}
 
export default Header