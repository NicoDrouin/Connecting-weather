import React from 'react'
import './header.scss'

import logo from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <img src={logo} alt='Logo'/>
                <div>
                    <p>Connect</p>
                    <p>Météo</p>
                </div>
                <p>La météo des champions!</p>
            </div>
        </header>
    )
}
 
export default Header