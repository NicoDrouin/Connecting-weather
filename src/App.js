import React, { useState } from 'react'

import useWeatherAPI from './services/httpService'

import City from './component/City/City'
import Entrance from './component/Entrance/Entrance'


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
		<div className="App">
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
            <Entrance
                currentCity = {currentCity}
                setCurrentCity = {setCurrentCity}
                apiDataCurrentDay = {apiDataCurrentDay}
                isLoadingCurrentDay = {isLoadingCurrentDay}
                isErrorCurrentDay = {isErrorCurrentDay}
                doFetch = {doFetch}
            />
            }
		</div>
	)
}

export default App