import React from 'react'
import './Entrance.scss'
import '../SearchBox/SearchBox.scss'

import SearchBox from '../SearchBox/SearchBox'


const Entrance = ({
        currentCity,
        setCurrentCity,
        isLoadingCurrentDay,
        isErrorCurrentDay,
        doFetch
    }) => {

    return (
        <main className='entrance'>
            <div className='container'>
                <SearchBox
                    currentCity = {currentCity}
                    setCurrentCity = {setCurrentCity}
                    doFetch = {doFetch}
                    isErrorCurrentDay = {isErrorCurrentDay}
                />
            </div>
            {/* {isLoadingCurrentDay ? 'isLoadingCurrentDay' : 'isNotLoadingCurrentDay'}<br/> */}
        </main>
    )
}

export default Entrance