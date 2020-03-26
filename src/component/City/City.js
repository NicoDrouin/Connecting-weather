import React, { useEffect } from 'react'
import Current from './Current'
import Week from './Week'
import Day from './Day'


const City = () => {


    return (
        <div>
            City is selected
            <Current/>
            <Week/>
            <Day/>
        </div>
    )
}
 
export default City