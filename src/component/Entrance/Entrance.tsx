import React from 'react'
import './entrance.scss'

import SearchBox from '../SearchBox/SearchBox'

import CowAbduction from '../CowAbduction/CowAbduction'


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
                <CowAbduction/>
            </div>
        </main>
    )
}

export default Entrance