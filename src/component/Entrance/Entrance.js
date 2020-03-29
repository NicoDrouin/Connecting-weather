import React from 'react'
import './Entrance.scss'

import SearchInput from '../SearchInput'


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
                    <SearchInput
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