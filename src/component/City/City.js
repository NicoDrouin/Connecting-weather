import React, { useEffect } from 'react'
import Current from './Current'
import Week from './Week'
import Day from './Day'
import useWeatherAPI from '../../services/httpService'


const City = () => {
    const [{ apiData, isLoading, isError }] = useWeatherAPI('London')


    return (
        <div>
            City is selected
            {isError && 'Something went wrong'}
            {isLoading ? 'loading' : apiData && apiData.name}
            <Current/>
            <Week/>
            <Day/>
        </div>
    )
}
 
export default City