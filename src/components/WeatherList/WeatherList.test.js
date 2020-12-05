import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import WeatherList from './WeatherList'

test('renders without crashing', () => {
    render(<WeatherList />)
})

test('should display an array of WeatherItem', () => {
    const testData = Array(5)
        .fill(0)
        .map((_, idx) => ({
            id: idx,
            applicableDate: '2020-10-28',
            minTemp: 23.97,
            maxTemp: 29.259999999999998,
        }))

    render(<WeatherList weathers={testData} />)

    expect(screen.queryAllByText('Wednesday').length).toBe(5)
    expect(screen.queryAllByText('24.0 - 29.3 ℃').length).toBe(5)
})
