import React, {useState, useEffect} from 'react'
import { ApiClient } from 'admin-bro'

import ChartComponent from './ChartComponent'
import {Preloader} from './Preloader'

const api = new ApiClient()

const CustomDashbord = () => {

    const [weather, setWeather] = useState([])

    useEffect(()=>{
        api.getDashboard({actionName: 'allWeather'})
            .then(res=>setWeather(res.data))
            .catch(e=>console.log(e))       
    }, [])

    if(weather.length === 0){
        return <Preloader/>
    }

    return(
        <ChartComponent data = {weather}/>
    )
}

export default CustomDashbord