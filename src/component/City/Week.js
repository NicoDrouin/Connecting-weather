import React from 'react'


const Week = ({apiDataWeek, isLoadingWeek, isErrorWeek}) => {

    return (
        <div>
            Météo de la semaine<br/>
            {
                isLoadingWeek ?
                'loadingWeek' :
                apiDataWeek &&
                    apiDataWeek.list.map((dayOfWeek, i) =>
                        new Date(dayOfWeek.dt * 1000).getUTCHours() === 12 &&
                        <div key={'dayOfWeek' + i}>
                            {new Date(dayOfWeek.dt * 1000).toLocaleString('fr-FR', {  weekday: 'long' })}
                            {dayOfWeek.main.temp}
                            {dayOfWeek.weather[0].description}
                            {dayOfWeek.weather[0].icon}
                        </div>
                    )
            }
            {isErrorWeek && 'errorWeek'}
        </div>
    )
}

export default Week