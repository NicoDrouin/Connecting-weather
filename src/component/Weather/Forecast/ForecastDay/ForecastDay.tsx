import React, { Fragment } from 'react'
import './forecastDay.scss'

import setIconWeather from '../../../../functions/setIconWeather'
import { createTempChart, temperaturesChart } from '../../../../functions/createTempChart'


interface Props {
    apiDataForecastWeek: any;
    dayToPrint: any;
}


const ForecastDay = ({
        apiDataForecastWeek,
        dayToPrint
    }: Props): JSX.Element => {

    const forecastHours = ['6h00', '9h00', '12h00', '15h00', '18h00']
    let forecastHoursIncrement = -1

    const getHourInDay = () => {
        if (forecastHoursIncrement > 3) forecastHoursIncrement = -1
        forecastHoursIncrement++
        return forecastHours[forecastHoursIncrement]
    }

     return (
        <Fragment>
            {
                <section className='chart-box forecast-day'>
                    <div className='day'>
                        {new Date(apiDataForecastWeek.list[dayToPrint].dt * 1000).toLocaleString('fr-FR', {weekday: 'long'})}
                    </div>
                    <div className='top'>
                        {apiDataForecastWeek.list.map((hourOfDay: any, i: Number) =>
                            // i >= dayToPrint - 2 &&
                            // i <= dayToPrint + 2 &&
                            // These are the times around 12hUTC: 6h, 9h, 12h, 15h, 18h
                            i >= dayToPrint - 2 &&
                            i <= dayToPrint + 2 &&
                            <div className='forecast-element' key={'hourOfDay' + i}>
                                <div className={'icon-' + setIconWeather(parseInt(hourOfDay.weather[0].id))}></div>
                                <div className='hour'>
                                    {getHourInDay()}
                                </div>
                                <div className='temp max-767'>
                                    {hourOfDay.main.temp + '°C'}
                                </div>
                                <div className='description'>
                                    {hourOfDay.weather[0].description}
                                </div>
                                <span className='d-none'>
                                    {temperaturesChart.push(hourOfDay.main.temp)}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className='chart-temps'>
                        {createTempChart()}
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default ForecastDay