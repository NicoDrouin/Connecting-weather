import React, { useState, useRef, Fragment } from 'react'
import './Week.scss'

import setIconWeather from '../../../functions/setIconWeather'
import {createTempChart, temperaturesChart} from '../../../functions/createTempChart'

import Day from '../Day/Day'


const useScroll = () => {
    const htmlElRef = useRef(null)
    const executeScroll = () => window.scrollTo({top: htmlElRef.current.offsetTop, behavior: 'smooth'})

    return [executeScroll, htmlElRef]
}

const Week = ({apiDataWeek, isLoadingWeek, isErrorWeek}) => {

    const [dayToPrint, setDayToPrint] = useState()

    const [scrollToElement, anchorScroll] = useScroll()

    const getDayForecast = (i) => {
        setDayToPrint(i)
        setTimeout(scrollToElement, 100)
    }

     return (
        <Fragment>
            {
                isLoadingWeek ? 'loadingWeek' :
                isErrorWeek ? 'Houston, we\'ve had a problem.' :
                <section
                    className='chart-box week-forecast'>
                    <div className='top'>
                        {apiDataWeek.list.map((dayOfWeek, i) =>
                            // i > 4 : make sure that the selected day is not today
                           !!( i > 4 & new Date(dayOfWeek.dt * 1000).getUTCHours() === 12) &&
                            <div className='day' key={'dayOfWeek' + i}>
                                <div className='name'>
                                    {new Date(dayOfWeek.dt * 1000).toLocaleString('fr-FR', {weekday: 'long'})}
                                </div>
                                <div className={'icon-' + setIconWeather(parseInt(dayOfWeek.weather[0].id))}></div>
                                <div className='description'>
                                    {dayOfWeek.weather[0].description}
                                </div>
                                <div
                                    className='click-zone'
                                    value = {i}
                                    onClick={e => getDayForecast(i)}
                                ></div>
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
                <Day
                    apiDataWeek = {apiDataWeek}
                    dayToPrint = {dayToPrint}
                />
            }
        </Fragment>
    )
}

export default Week