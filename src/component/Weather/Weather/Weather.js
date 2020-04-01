import React from 'react'
import './weather.scss'

import SearchBox from '../../SearchBox/SearchBox'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import ForecastWeek from '../Forecast/ForecastWeek/ForecastWeek'


const Weather = ({
        currentCity,
        setCurrentCity,
        apiDataCurrentWeather,
        isLoadingCurrentWeather,
        isErrorCurrentWeather,
        apiDataForecastWeek,
        isLoadingForecastWeek,
        isErrorForecastWeek,
        doFetch
    }) => {

    return (
        
        <main className='weather'>
            <div className='container'>
                <div className='top'>
                    <CurrentWeather
                        apiDataCurrentWeather = {apiDataCurrentWeather}
                        isLoadingCurrentWeather = {isLoadingCurrentWeather}
                        isErrorCurrentWeather = {isErrorCurrentWeather}
                    />
                    <SearchBox
                        currentCity = {currentCity}
                        setCurrentCity = {setCurrentCity}
                        doFetch = {doFetch}
                        isErrorCurrentWeather = {isErrorCurrentWeather}
                    />
                </div>
                <ForecastWeek
                    apiDataForecastWeek = {apiDataForecastWeek}
                    isLoadingForecastWeek = {isLoadingForecastWeek}
                    isErrorForecastWeek = {isErrorForecastWeek}
                    doFetch = {doFetch}
                />
            </div>
        </main>
    )
}

export default Weather