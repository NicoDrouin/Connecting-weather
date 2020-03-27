import React from 'react'

const Current = ( { apiData, isLoading, isError } ) => {
    return (
        <div>
            {isError ? 'error' : 'noErr'}
            {
                isLoading ?
                'loading' :
                apiData &&
                <div>
                    <div>{apiData.main.temp}</div>
                    <div>
                        {apiData.name}<br/>
                        {apiData.main.description}
                    </div>
                </div>
            }
        </div>
    )
}

export default Current