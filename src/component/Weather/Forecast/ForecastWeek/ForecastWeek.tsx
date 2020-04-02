import React, { useState, useEffect, useRef, Fragment } from 'react'
import { useParams } from "react-router";
import './../forecast.scss'
import './forecastWeek.scss'

import setIconWeather from '../../../../functions/setIconWeather'
import {createTempChart, temperaturesChart} from '../../../../functions/createTempChart'

import ForecastDay from '../ForecastDay/ForecastDay'
import Loader from '../../Loader/Loader'


interface Props {
    apiDataForecastWeek: any;
    isLoadingForecastWeek: boolean;
    isErrorForecastWeek: boolean;
    doFetch: Function;
}


const useScroll = () => {
    const htmlElRef = useRef(null)
    const executeScroll = () => 
        window.scrollTo({top: (htmlElRef.current as unknown as HTMLElement).offsetTop, behavior: 'smooth'})

    return [executeScroll, htmlElRef]
}

const Week = ({
        apiDataForecastWeek,
        isLoadingForecastWeek,
        isErrorForecastWeek,
        doFetch
    }: Props): JSX.Element => {

    let { city } = useParams()

    const [dayToPrint, setDayToPrint] = useState()

    const [scrollToElement, anchorScroll] = useScroll()

    const getDayForecast = (i: any) => {
        setDayToPrint(i)
        setTimeout(scrollToElement as Function, 100)
    }

    useEffect(() => {
        if (!apiDataForecastWeek) doFetch(city)
    }, [apiDataForecastWeek, city, doFetch] )

     return (
        <Fragment>
            {
                isLoadingForecastWeek ?
                <Loader/> :
                isErrorForecastWeek ?
                'Houston, we\'ve had a problem.' :
                apiDataForecastWeek &&
                <section className='chart-box forecast-week'>
                    <div className='top'>
                        {apiDataForecastWeek.list.map((dayOfWeek: any, i: number) =>
                            // i > 4 : make sure that the selected day is not today
                            i > 4 &&
                           new Date(dayOfWeek.dt * 1000).getUTCHours() === 12 &&
                            <div className='forecast-element' key={'dayOfWeek' + i}>
                                <div className='day'>
                                    {new Date(dayOfWeek.dt * 1000).toLocaleString('fr-FR', {weekday: 'long'})}
                                </div>
                                <div className='temp max-767'>
                                    {dayOfWeek.main.temp + '°C'}
                                </div>
                                <div className={'icon-' + setIconWeather(parseInt(dayOfWeek.weather[0].id))}></div>
                                <div className='description'>
                                    {dayOfWeek.weather[0].description}
                                </div>
                                <div
                                    className='click-zone'
                                    data-day-index = {i}
                                    onClick={e => getDayForecast(i)}>
                                </div>
                                <span className='d-none'>
                                    {temperaturesChart.push(dayOfWeek.main.temp)}
                                </span>
                            </div>
                        )}
                    </div>
                    {createTempChart()}
                </section>
            }

            <div ref={anchorScroll}></div>

            {
                dayToPrint &&
                <ForecastDay
                    apiDataForecastWeek = {apiDataForecastWeek}
                    dayToPrint = {dayToPrint}
                />
            }
        </Fragment>
    )
}

export default Week