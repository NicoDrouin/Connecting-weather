import React, { Fragment } from 'react'

import setIconWeather from '../../../functions/setIconWeather'
import {createTempChart, temperaturesChart} from '../../../functions/createTempChart'


const Day = ({apiDataWeek, dayToPrint}) => {

     return (
        <Fragment>
            {
                <section className='chart-box day-forecast'>
                    <div className='name'>
                        {new Date(apiDataWeek.list[dayToPrint].dt * 1000).toLocaleString('fr-FR', {weekday: 'long'})}
                    </div>
                    <div className='top'>
                        {apiDataWeek.list.map((hourOfDay, i) =>
                            // i >= dayToPrint - 2 & i <= dayToPrint + 2 :
                            // These are the times around 12hUTC - 6h, 9h, 12h, 15h, 18h
                            !!(i >= dayToPrint - 2 & i <= dayToPrint + 2) &&
                            <div className='day' key={'hourOfDay' + i}>
                                <div className={'icon-' + setIconWeather(parseInt(hourOfDay.weather[0].id))}></div>
                                <div className='description'>
                                    {hourOfDay.weather[0].description}
                                </div>
                                <span className='d-none'>
                                    {temperaturesChart.push(hourOfDay.main.temp)}
                                </span>
                            </div>
                        )}
                    </div>
                    {createTempChart()}
                </section>
            }
        </Fragment>
    )
}

export default Day