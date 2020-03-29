import React, { Fragment } from 'react'
import './Week.scss'

import setIconWeather from '../../../functions/setIconWeather'


const Week = ({apiDataWeek, isLoadingWeek, isErrorWeek}) => {

    let temperaturesChart = []
    let cloudChart = [0, 0, 0, 0, 0]

    let minTemp, maxTemp, minMaxTempDifference, midChartTemp
    let xPosition, yPosition, xPositionNext, yPositionNext

    const setChartTemps = (temperaturesChart) => {
        minTemp = Math.min(...temperaturesChart)
        maxTemp = Math.max(...temperaturesChart)
        minMaxTempDifference = maxTemp - minTemp
        midChartTemp = (minTemp + maxTemp) / 2
    }

    return (
        <Fragment>
            {
                isLoadingWeek ? 'loadingWeek' :
                isErrorWeek ? 'Houston, we\'ve had a problem.' :
                <section className='chart-box'>
                    <div className='top'>
                        {apiDataWeek.list.map((dayOfWeek, i) =>
                            new Date(dayOfWeek.dt * 1000).getUTCHours() === 12 &&
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
                                    value={'day-' + i}
                                    // onChange = {event => switchToDayView(event.target.value)}
                                ></div>
                                <span className='d-none'>
                                    {temperaturesChart.push(dayOfWeek.main.temp)}
                                    {cloudChart.push(dayOfWeek.clouds.all)}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className='chart-temps'>
                        {setChartTemps(temperaturesChart)}
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'>
                            {temperaturesChart.map((pointChartTemp, i) =>
                                <Fragment key={'ChartTemps' + i}>
                                    {xPosition = 100 + i * 200}
                                    {yPosition = 460 - ((temperaturesChart[i] - minTemp) / minMaxTempDifference) * 420}
                                    {xPositionNext = 300 + i * 200}
                                    {yPositionNext = 460 - ((temperaturesChart[i + 1] - minTemp) / minMaxTempDifference) * 420}
                                    {i < 4 &&
                                        <line
                                            x1={xPosition}
                                            y1={yPosition}
                                            x2={xPositionNext}
                                            y2={yPositionNext}
                                            strokeWidth='2'
                                            stroke='#c00'
                                        />
                                    }
                                    <text
                                        x={xPosition}
                                        y={temperaturesChart[i] > midChartTemp ? yPosition + 40 : yPosition - 25}
                                    >
                                        {temperaturesChart[i] + '°C'}
                                    </text>
                                    <circle
                                        cx={xPosition}
                                        cy={yPosition}
                                        r='10'
                                        fill='#c00'
                                    />
                                </Fragment>
                            )}
                        </svg>
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default Week