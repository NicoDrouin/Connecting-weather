import React, { useState } from 'react'

import City from './component/City/City'
import Entrance from './component/Entrance/Entrance'

import useWeatherAPI from './services/httpService'


const App = () => {

    const [currentCity, setCurrentCity] = useState('')
    const [{ apiData, isLoading, isError, cityIsSelected }, doFetch] = useWeatherAPI()


	return (
		<div className="App">
            {
            cityIsSelected
            ?
            <City
                currentCity = {currentCity}
                setCurrentCity = {setCurrentCity}
                apiData = {apiData}
                isLoading = {isLoading}
                isError = {isError}
                doFetch = {doFetch}
            />
            :
            <Entrance
                currentCity = {currentCity}
                setCurrentCity = {setCurrentCity}
                apiData = {apiData}
                isLoading = {isLoading}
                isError = {isError}
                doFetch = {doFetch}
            />
            }
		</div>
	)
}

export default App