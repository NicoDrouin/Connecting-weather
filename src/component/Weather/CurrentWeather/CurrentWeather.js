import React, { Fragment } from 'react'
import './currentWeather.scss'

import setIconWeather from '../../../functions/setIconWeather'


const CurrentWeather = ({apiDataCurrentWeather, isLoadingCurrentWeather, isErrorCurrentWeather}) => {
    return (
        <section className='widget-current'>
            {/* {isErrorCurrentWeather ? 'errorCurrentWeather' : 'noErrorCurrentWeather'} */}
            {
                isLoadingCurrentWeather ?
                'loadingCurrentWeather' :
                apiDataCurrentWeather &&
                <Fragment>
                    <h2 className='name'>
                        {apiDataCurrentWeather.name}
                    </h2>
                    <div className='bottom'>
                        <div className='left'>
                            <div className='temp'>{apiDataCurrentWeather.main.temp + '°C'}</div>
                            <div className='weather-description'>{apiDataCurrentWeather.weather[0].description}</div>
                        </div>
                        <div className={'icon-current-' + setIconWeather(parseInt(apiDataCurrentWeather.weather[0].id))}></div>
                    </div>
                </Fragment>
            }
        </section>
    )
}

export default CurrentWeather