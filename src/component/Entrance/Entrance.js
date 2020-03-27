import React from 'react'

import CityInput from '../CityInput'

const Entrance = ({currentCity, setCurrentCity, apiData, isLoading, isError, doFetch}) => {
    return (
        <div>
            <header>
                LogoImg
            </header>
            <main>
                <CityInput
                    currentCity = {currentCity}
                    setCurrentCity = {setCurrentCity}
                    doFetch = {doFetch}
                />
                {apiData && apiData.name}<br/>
                {isLoading ? 'isLoading' : 'isNotLoading'}<br/>
                {isError ? 'isError' : 'isNotError'}
            </main>
        </div>
    )
}

export default Entrance