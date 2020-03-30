import React from 'react'
import './CityResults.scss'

import SearchBox from '../../SearchBox/SearchBox'
import CurrentDay from '../CurrentDay/CurrentDay'
import Week from '../Week/Week'


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
                <div className='top'>
                    <CurrentDay
                        apiDataCurrentDay = {apiDataCurrentDay}
                        isLoadingCurrentDay = {isLoadingCurrentDay}
                        isErrorCurrentDay = {isErrorCurrentDay}
                    />
                    <SearchBox
                        currentCity = {currentCity}
                        setCurrentCity = {setCurrentCity}
                        doFetch = {doFetch}
                        isErrorCurrentDay = {isErrorCurrentDay}
                    />
                </div>
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