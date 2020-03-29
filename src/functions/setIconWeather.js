const setIconWeather = (weatherId) => {
    if (weatherId >= 802) return 'cloud'
    else if (weatherId === 801) return 'few-clouds'
    else if (weatherId === 800) return ('sun')
    else if (weatherId >= 701) return ('fog')
    else if (weatherId >= 600) return ('snow')
    else if (weatherId >= 300) return ('rain')
    else if (weatherId >= 200) return ('thunder')
    else console.log('Houston, we\'ve had a problem.')
}

export default setIconWeather