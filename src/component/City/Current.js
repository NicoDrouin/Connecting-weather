import React, { Fragment } from 'react'


const Current = ({apiDataCurrentDay, isLoadingCurrentDay, isErrorCurrentDay}) => {
    return (
        <Fragment>
            {isErrorCurrentDay ? 'errorCurrentDay' : 'noErrorCurrentDay'}
            {
                isLoadingCurrentDay ?
                'loadingCurrentDay' :
                apiDataCurrentDay &&
                <div>
                    <div>{apiDataCurrentDay.main.temp}</div>
                    <div>
                        {apiDataCurrentDay.name}<br/>
                        {apiDataCurrentDay.main.description}
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Current