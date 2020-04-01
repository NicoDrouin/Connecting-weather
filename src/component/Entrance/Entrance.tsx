import React from 'react'
import './entrance.scss'

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
            </div>
            {/* {isLoadingCurrentWeather ? 'isLoadingCurrentWeather' : 'isNotLoadingCurrentWeather'}<br/> */}
        </main>
    )
}

export default Entrance