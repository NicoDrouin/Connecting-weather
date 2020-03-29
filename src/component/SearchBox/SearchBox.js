import React from 'react'
import './SearchBox.scss'


const SearchBox = ({currentCity, setCurrentCity, doFetch, isErrorCurrentDay}) => {
    return (
        <section className='search-box'>
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
            {isErrorCurrentDay &&
                <p className='error-messages'>
                    Erreur! Vérifiez votre aurtograffe !!!
                </p>
            }
        </section>
    )
}

export default SearchBox