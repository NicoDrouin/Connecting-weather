// https://www.robinwieruch.de/react-hooks-fetch-data
import React, { useState } from 'react'

import axios from 'axios'

import {baseURLAPI, keyAPI, unitsAPI, langAPI} from './URLAPI'


const useWeatherAPI = () => {
    const [cityAPI, setCityAPI] = useState('')
    const [cityIsSelected, setCityIsSelected] = useState(false)

    const [apiDataCurrentDay, setApiDataCurrentDay] = useState(null)
    const [isLoadingCurrentDay, setIsLoadingCurrentDay] = useState(false)
    const [isErrorCurrentDay, setIsErrorCurrentDay] = useState(false)

    const [apiDataWeek, setApiDataWeek] = useState(null)
    const [isLoadingWeek, setIsLoadingWeek] = useState(false)
    const [isErrorWeek, setIsErrorWeek] = useState(false)

    React.useEffect(() => {

        const fetchDataCurrentDay = async () => {
            setIsErrorCurrentDay(false)
            setIsLoadingCurrentDay(true)
            try {
                const result = await axios(
                    'https://' + baseURLAPI + 'weather?q=' + cityAPI + '&APPID=' + keyAPI + '&units=' + unitsAPI + '&lang=' + langAPI
                )
                setApiDataCurrentDay(result.data)
                fetchDataWeek()
            } catch (error) {
                setIsErrorCurrentDay(true)
            }
            setIsLoadingCurrentDay(false)
        }

        const fetchDataWeek = async () => {
            setIsErrorWeek(false)
            setIsLoadingWeek(true)
            try {
                const result = await axios(
                    'https://' + baseURLAPI + 'forecast?q=' + cityAPI + '&APPID=' + keyAPI + '&units=' + unitsAPI + '&lang=' + langAPI
                )
                setApiDataWeek(result.data)
                setCityIsSelected(true)
            } catch (error) {
                setIsErrorWeek(true)
            }
            setIsLoadingWeek(false)
        }

        cityAPI !== '' && fetchDataCurrentDay()
    }, [cityAPI])

    return [{
        apiDataCurrentDay,
        isLoadingCurrentDay,
        isErrorCurrentDay,
        apiDataWeek,
        isLoadingWeek,
        isErrorWeek,
        cityIsSelected
        }, setCityAPI
    ]
}

export default useWeatherAPI