import React, { Fragment } from 'react'
import './cow-abduction.scss'

import spaceCow from '../../assets/img/spaceCow.svg'
import ufo from '../../assets/img/ufo.svg'


const CowAbduction = () => {
    return (
        <Fragment>
            <img className='space-cow min-640' src={spaceCow} alt='Cow'/>
            <div className='green-ray min-640'></div>
            <img className='ufo min-640' src={ufo} alt='UFO'/>
        </Fragment>
    )
}
 
export default CowAbduction