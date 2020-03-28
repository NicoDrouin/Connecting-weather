import React from 'react'


const CityInput = ({currentCity, setCurrentCity, doFetch}) => {
    return (
        <form onSubmit={event => {
            doFetch(currentCity)
            event.preventDefault()
        }}>
        <label htmlFor='city'>Votre ville:</label>
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