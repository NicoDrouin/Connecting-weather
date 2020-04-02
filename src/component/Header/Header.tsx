import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

import logo from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <Link to='/'>
                    <img src={logo} alt='Logo'/>
                    <div>
                        <p>Connect</p>
                        <p>Météo</p>
                    </div>
                </Link>
                <p>La météo des champions!</p>
            </div>
        </header>
    )
}
 
export default Header