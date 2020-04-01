import React from 'react'
import './searchBox.scss'


interface Props {
    currentCity: string;
    setCurrentCity: Function;
    isErrorCurrentWeather: boolean;
    doFetch: Function;
}

const SearchBox = ({
        currentCity,
        setCurrentCity,
        doFetch,
        isErrorCurrentWeather
    }: Props): JSX.Element => {

    return (
        <section className='search-box'>
            <form onSubmit={event => {
                doFetch(currentCity)
                event.preventDefault()
            }}>
                <label htmlFor='city'>
                    <span className='only-entrance'>Votre</span>
                    <span className='only-weather'>Nouvelle</span> ville:
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
            {isErrorCurrentWeather &&
                <p className='error-messages'>
                    Erreur! Vérifiez votre aurtograffe !!!
                </p>
            }
        </section>
    )
}

export default SearchBox