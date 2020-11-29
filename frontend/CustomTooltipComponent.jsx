import React from 'react'

export const CustomTooltip = ({payload, type}) => {

    if(payload.length === 0){
      return ''
    }
  
    const {date, day, temperature, pressure, humidity} = payload[0].payload

    switch (type) {
      case 'pressure':
        return (
          <div style = {wrapperStyle} >
            <div>Давление: {pressure} мм</div>
          </div>
        )
      case 'humidity':
        return (
          <div style = {wrapperStyle} >
            <div>Влажность: {humidity} %</div>
          </div>
          )
      default:
        return (
          <div style = {wrapperStyle} >
            <div>{date}, {day}</div>
            <hr/>
            <div>Температура: {temperature} {'\u00B0'}C</div>
            <div>Давление: {pressure} мм</div>
            <div>Влажность: {humidity} %</div>
          </div>
        )
    }
}

const wrapperStyle = {
  border: '1px solid #034cb9',
  borderRadius: '5px',
  padding: '10px',
  backgroundColor: '#ffffff'
}