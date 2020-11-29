import React, { memo } from 'react';
import {
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar
} from 'recharts';

import { CustomTooltip } from './CustomTooltipComponent'

const ChartComponent = ({data}) => {

    return (
      <div style={{ width: '100%', height: 300 }}>
      <p>Общая информация</p>
      <ResponsiveContainer>
          <AreaChart
            data={data}
            syncId="anyId"
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorT" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
                <stop offset="20%" stopColor="yellow" stopOpacity={0.8}/>
                <stop offset="60%" stopColor="blue" stopOpacity={0.8}/>
              </linearGradient> 
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity = ".3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip content = {<CustomTooltip />} />
            <Area type="linear" dataKey="temperature" stroke="#8884d8" fill="url(#colorT)" />
          </AreaChart>
        </ResponsiveContainer>

        <p>Давление</p>
        <ResponsiveContainer  height = {100}>
          <BarChart 
            data={data}
            syncId="anyId"
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip content = {<CustomTooltip type = 'pressure' />} />
            <Bar dataKey="pressure" stroke="#82ca9d" fill="#82ca9d" />
          </BarChart >
        </ResponsiveContainer>

        <p>Влажность</p>
        <ResponsiveContainer  height = {100}>
          <BarChart 
            data={data}
            syncId="anyId"
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip content = {<CustomTooltip type = 'humidity' />} />
            <Bar dataKey="humidity" stroke="#82ca9d" fill="#044de0" />
          </BarChart >
        </ResponsiveContainer>

      </div>
    );
}

export default memo(ChartComponent)



