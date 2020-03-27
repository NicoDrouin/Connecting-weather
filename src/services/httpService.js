// https://www.robinwieruch.de/react-hooks-fetch-data
import React, { useState } from 'react'
import axios from 'axios'

import {baseURLAPI, keyAPI, unitsAPI, langAPI} from '../services/URLAPI'

const useWeatherAPI = () => {
    const [apiData, setApiData] = useState(null)
    const [cityAPI, setCityAPI] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [cityIsSelected, setCityIsSelected] = useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)
            try {
                const result = await axios(
                    'https://' + baseURLAPI + cityAPI + '&APPID=' + keyAPI + '&units=' + unitsAPI + '&lang=' + langAPI
                )
                setApiData(result.data)
                setCityIsSelected(true)
            } catch (error) {
                setIsError(true)
            }
            setIsLoading(false)
        }
        cityAPI !== '' && fetchData()
    }, [cityAPI])

    return [{ apiData, isLoading, isError, cityIsSelected }, setCityAPI]
}

export default useWeatherAPI