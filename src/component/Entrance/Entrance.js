import React from 'react'
import './Entrance.scss'

import CityInput from '../CityInput'


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
                <section className='search-box'>
                    <CityInput
                        currentCity = {currentCity}
                        setCurrentCity = {setCurrentCity}
                        doFetch = {doFetch}
                    />
                    <p className='error-messages'>
                        {isErrorCurrentDay && 'Erreur! Vérifiez votre aurtograffe !!!'}
                    </p>
                </section>
            </div>
            {/* {isLoadingCurrentDay ? 'isLoadingCurrentDay' : 'isNotLoadingCurrentDay'}<br/> */}
        </main>
    )
}

export default Entrance