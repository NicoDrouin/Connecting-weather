import React from 'react'

import CityInput from '../CityInput'


const Entrance = ({
        currentCity,
        setCurrentCity,
        apiDataCurrentDay,
        isLoadingCurrentDay,
        isErrorCurrentDay,
        doFetch
    }) => {

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
                {apiDataCurrentDay && apiDataCurrentDay.name}<br/>
                {isLoadingCurrentDay ? 'isLoadingCurrentDay' : 'isNotLoadingCurrentDay'}<br/>
                {isErrorCurrentDay ? 'isErrorCurrentDay' : 'isNotErrorCurrentDay'}
            </main>
        </div>
    )
}

export default Entrance