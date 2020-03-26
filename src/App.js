import React, { useState } from 'react'

import City from './component/City/City'
import Entrance from './component/Entrance/Entrance'



const App = () => {

    const [cityIsSelected, setCityIsSelected] = useState(true)

	return (
		<div className="App">
            {
            cityIsSelected
            ?
            <City/>
            :
            <Entrance/>
            }
		</div>
	)
}

export default App
