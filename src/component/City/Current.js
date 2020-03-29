import React, { Fragment } from 'react'


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
                        <div className='temp'>
                            {apiDataCurrentDay.main.temp + '°C'}
                        </div>
                        <div className='icon'>
                            {apiDataCurrentDay.weather[0].id}
                        </div>
                    </div>
                </Fragment>
            }
        </section>
    )
}

export default Current