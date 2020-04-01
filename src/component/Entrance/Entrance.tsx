import React from 'react'
import './entrance.scss'
import './cow-abduction.scss'

import spaceCow from '../../assets/img/spaceCow.svg'
import ufo from '../../assets/img/ufo.svg'

import SearchBox from '../SearchBox/SearchBox'


interface Props {
    currentCity: string;
    setCurrentCity: Function;
    isLoadingCurrentWeather: boolean;
    isErrorCurrentWeather: boolean;
    doFetch: Function;
}

const Entrance = ({
        currentCity,
        setCurrentCity,
        isLoadingCurrentWeather,
        isErrorCurrentWeather,
        doFetch
    }: Props): JSX.Element => {

    return (
        <main className='entrance'>
            <div className='container'>
                <SearchBox
                    currentCity = {currentCity}
                    setCurrentCity = {setCurrentCity}
                    doFetch = {doFetch}
                    isErrorCurrentWeather = {isErrorCurrentWeather}
                />
                <img className='space-cow min-640' src={spaceCow} alt='Cow'/>
                <div className='green-ray min-640'></div>
                <img className='ufo min-640' src={ufo} alt='UFO'/>
            </div>
            {/* {isLoadingCurrentWeather ? 'isLoadingCurrentWeather' : 'isNotLoadingCurrentWeather'}<br/> */}
        </main>
    )
}

export default Entrance