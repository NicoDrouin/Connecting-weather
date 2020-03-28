import React from 'react'

import CityInput from '../CityInput'
import Current from './Current'
import Week from './Week'


const City = ({
        currentCity,
        setCurrentCity,
        apiDataCurrentDay,
        isLoadingCurrentDay,
        isErrorCurrentDay,
        apiDataWeek,
        isLoadingWeek,
        isErrorWeek,
        doFetch
    }) => {

    return (
        <main className='city'>
            <div className='container'>
                <CityInput
                    currentCity = {currentCity}
                    setCurrentCity = {setCurrentCity}
                    doFetch = {doFetch}
                />
                City is selected
                <Current
                    apiDataCurrentDay = {apiDataCurrentDay}
                    isLoadingCurrentDay = {isLoadingCurrentDay}
                    isErrorCurrentDay = {isErrorCurrentDay}
                />
                <Week
                    apiDataWeek = {apiDataWeek}
                    isLoadingWeek = {isLoadingWeek}
                    isErrorWeek = {isErrorWeek}
                />
            </div>
        </main>
    )
}

export default City