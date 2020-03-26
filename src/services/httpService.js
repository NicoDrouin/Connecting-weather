// https://www.robinwieruch.de/react-hooks-fetch-data
import React, { useState } from 'react'
import axios from 'axios'

const baseURL = 'api.openweathermap.org/data/2.5/weather?q='
const keyAPI = '19bf54806da80afdc27f3660b45b2382'
const units = 'metric'
const lang = 'fr'

const useWeatherAPI = (cityName) => {
    const [apiData, setApiData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            try {
                const result = await axios(
                    'https://' + baseURL + cityName + '&APPID=' + keyAPI + '&units=' + units + '&lang=' + lang
                )
                setApiData(result.data)

            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        }
    fetchData()
    }, [])
    return [{ apiData, isLoading, isError }]
}

export default useWeatherAPI