import React from 'react'
import './CityResults.scss'

import SearchInput from '../../SearchInput'
import Week from '../Week'


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
                    {/* City is selected */}
                    <Current
                        apiDataCurrentDay = {apiDataCurrentDay}
                        isLoadingCurrentDay = {isLoadingCurrentDay}
                        isErrorCurrentDay = {isErrorCurrentDay}
                    />
                    <SearchInput
                        currentCity = {currentCity}
                        setCurrentCity = {setCurrentCity}
                        doFetch = {doFetch}
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