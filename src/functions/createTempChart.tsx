import React, { Fragment } from 'react'


let minTemp: number, maxTemp: number, minMaxTempDifference: number, midChartTemp: number
let xPosition, yPosition, xPositionPrev, yPositionPrev

export let temperaturesChart: number[] = []

export const setChartTemps = (temperaturesChart: number[]) => {
    minTemp = Math.min(...temperaturesChart)
    maxTemp = Math.max(...temperaturesChart)
    minMaxTempDifference = maxTemp - minTemp
    midChartTemp = (minTemp + maxTemp) / 2
}

export const getNumElements = () => {return temperaturesChart.length}

export const createTempChart = () => {

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox={'0 0 ' + (1000 * (temperaturesChart.length / 5)) + ' 500'}>
            {setChartTemps(temperaturesChart)}
            {temperaturesChart.map((pointChartTemp, i) =>
                <Fragment key={'ChartTemps' + i}>
                    {/* There is a gap of 20 viewbox units above and below the chart. */}
                    {xPosition = 100 + i * 200}
                    {yPosition = 460 - ((temperaturesChart[i] - minTemp) / minMaxTempDifference) * 420}
                    {xPositionPrev = -100 + i * 200}
                    {yPositionPrev = 460 - ((temperaturesChart[i - 1] - minTemp) / minMaxTempDifference) * 420}
                    {i > 0 && i < 5 &&
                        <line
                            x1={xPosition}
                            y1={yPosition}
                            x2={xPositionPrev}
                            y2={yPositionPrev}
                            strokeWidth={2 * (temperaturesChart.length / 5)}
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
                        r={10 * (temperaturesChart.length / 5)}
                        fill='#c00'
                    />
                </Fragment>
            )}
            {temperaturesChart = []}
        </svg>
    )
}