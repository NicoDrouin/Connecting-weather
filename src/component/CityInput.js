import React from 'react'


const CityInput = ({currentCity, setCurrentCity, doFetch}) => {
    return (
        <form onSubmit={event => {
            doFetch(currentCity)
            event.preventDefault()
        }}>
            <label htmlFor='city'>
                <span className='only-entrance'>Votre</span>
                <span className='only-city'>Nouvelle</span> ville:
            </label>
            <input
                type = 'text'
                value = {currentCity}
                name = 'city'
                id = 'city'
                onChange = {event => setCurrentCity(event.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export default CityInput