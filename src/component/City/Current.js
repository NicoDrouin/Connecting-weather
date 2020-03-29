import React, { Fragment } from 'react'

import setIconWeather from '../../functions/setIconWeather'


const Current = ({apiDataCurrentDay, isLoadingCurrentDay, isErrorCurrentDay}) => {
    return (
        <section className='widget-current'>
            {/* {isErrorCurrentDay ? 'errorCurrentDay' : 'noErrorCurrentDay'} */}
            {
                isLoadingCurrentDay ?
                'loadingCurrentDay' :
                apiDataCurrentDay &&
                <Fragment>
                    <div className='name'>
                        {apiDataCurrentDay.name}
                    </div>
                    <div className='bottom'>
                        <div className='left'>
                            <div className='temp'>{apiDataCurrentDay.main.temp + '°C'}</div>
                            <div className='weather-description'>{apiDataCurrentDay.weather[0].description}</div>
                        </div>
                        <div className={'icon-current-' + setIconWeather(parseInt(apiDataCurrentDay.weather[0].id))}></div>
                    </div>
                </Fragment>
            }
        </section>
    )
}

export default Current