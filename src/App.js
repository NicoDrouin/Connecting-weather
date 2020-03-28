import React, { useState, Fragment } from 'react'

import useWeatherAPI from './services/httpService'

import City from './component/City/City'
import Entrance from './component/Entrance/Entrance'
import Header from './component/Header'
import Footer from './component/Footer'


const App = () => {

    const [currentCity, setCurrentCity] = useState('')
    const [{
        apiDataCurrentDay,
        isLoadingCurrentDay,
        isErrorCurrentDay,
        apiDataWeek,
        isLoadingWeek,
        isErrorWeek,
        cityIsSelected
    }, doFetch] = useWeatherAPI()

	return (
            <Fragment>
                <Header/>
                {
                cityIsSelected
                ?
                <City
                    currentCity = {currentCity}
                    setCurrentCity = {setCurrentCity}
                    apiDataCurrentDay = {apiDataCurrentDay}
                    isLoadingCurrentDay = {isLoadingCurrentDay}
                    isErrorCurrentDay = {isErrorCurrentDay}
                    apiDataWeek = {apiDataWeek}
                    isLoadingWeek = {isLoadingWeek}
                    isErrorWeek = {isErrorWeek}
                    doFetch = {doFetch}
                />
                :
                <Fragment>
                    <Entrance
                        currentCity = {currentCity}
                        setCurrentCity = {setCurrentCity}
                        apiDataCurrentDay = {apiDataCurrentDay}
                        isLoadingCurrentDay = {isLoadingCurrentDay}
                        isErrorCurrentDay = {isErrorCurrentDay}
                        doFetch = {doFetch}
                    />
                </Fragment>
                }
                <Footer/>
            </Fragment>
	)
}

export default App