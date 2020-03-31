import React from 'react'
import './entrance.scss'

import SearchBox from '../SearchBox/SearchBox'


const Entrance = ({
        currentCity,
        setCurrentCity,
        isLoadingCurrentWeather,
        isErrorCurrentWeather,
        doFetch
    }) => {

    return (
        <main className='entrance'>
            <div className='container'>
                <SearchBox
                    currentCity = {currentCity}
                    setCurrentCity = {setCurrentCity}
                    doFetch = {doFetch}
                    isErrorCurrentWeather = {isErrorCurrentWeather}
                />
            </div>
            {/* {isLoadingCurrentWeather ? 'isLoadingCurrentWeather' : 'isNotLoadingCurrentWeather'}<br/> */}
        </main>
    )
}

export default Entrance