import React from 'react'

import CityInput from '../CityInput'
import Current from './Current'
import Week from './Week'
import Day from './Day'


const City = ({currentCity, setCurrentCity, apiData, isLoading, isError, doFetch}) => {

    return (
        <div>
            <CityInput
                currentCity = {currentCity}
                setCurrentCity = {setCurrentCity}
                doFetch = {doFetch}
            />
            City is selected
            <Current
                apiData = {apiData}
                isLoading = {isLoading}
                isError = {isError}
            />
            <Week/>
            <Day/>
        </div>
    )
}

export default City