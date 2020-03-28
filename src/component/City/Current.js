import React from 'react'


const Current = ({apiDataCurrentDay, isLoadingCurrentDay, isErrorCurrentDay}) => {
    return (
        <div>
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
        </div>
    )
}

export default Current