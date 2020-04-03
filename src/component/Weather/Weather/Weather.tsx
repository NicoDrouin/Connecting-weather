import React from 'react'
import './weather.scss'

import SearchBox from '../../SearchBox/SearchBox'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import ForecastWeek from '../Forecast/ForecastWeek/ForecastWeek'


interface Props {
    currentCity: string;
    setCurrentCity: Function;
    apiDataCurrentWeather: any;
    isLoadingCurrentWeather: boolean;
    isErrorCurrentWeather: boolean;
    apiDataForecastWeek: any;
    isLoadingForecastWeek: boolean;
    isErrorForecastWeek: boolean;
    doFetch: Function;
}


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
    }: Props): JSX.Element => {

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