import React, { useState, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import useWeatherAPI from './services/httpService'

import Weather from './component/Weather/Weather/Weather'
import Entrance from './component/Entrance/Entrance'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'


const App = () => {

    const [currentCity, setCurrentCity] = useState('')
    const [{
        apiDataCurrentWeather,
        isLoadingCurrentWeather,
        isErrorCurrentWeather,
        apiDataForecastWeek,
        isLoadingForecastWeek,
        isErrorForecastWeek
    }, doFetch] = useWeatherAPI()

	return (
        <Fragment>
            <Header/>

            <Switch>

                <Route path='/city/:city'>
                    <Weather
                        currentCity = {currentCity}
                        setCurrentCity = {setCurrentCity}
                        apiDataCurrentWeather = {apiDataCurrentWeather}
                        isLoadingCurrentWeather = {isLoadingCurrentWeather}
                        isErrorCurrentWeather = {isErrorCurrentWeather}
                        apiDataForecastWeek = {apiDataForecastWeek}
                        isLoadingForecastWeek = {isLoadingForecastWeek}
                        isErrorForecastWeek = {isErrorForecastWeek}
                        doFetch = {doFetch}
                    />
                </Route>

                <Route path='/'>
                    <Entrance
                        currentCity = {currentCity}
                        setCurrentCity = {setCurrentCity}
                        isLoadingCurrentWeather = {isLoadingCurrentWeather}
                        isErrorCurrentWeather = {isErrorCurrentWeather}
                        doFetch = {doFetch}
                    />
                </Route>

            </Switch>

            <Footer/>
        </Fragment>
	)
}

export default App