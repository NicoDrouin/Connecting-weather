import React from 'react'
import './loader.scss'

import sun from '../../../assets/img/sun.svg'

const Loader = () => {
    return (
        <img className='loader' src={sun} alt='loader'/>
    )
}
 
export default Loader