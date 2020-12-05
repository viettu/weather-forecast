import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import WeatherItem from './WeatherItem'

test('renders without crashing', () => {
  render(<WeatherItem />)
})

test('display information', async () => {
  const weatherItemData = {
    applicable_date: '2020-10-28',
    min_temp: 23.97,
    max_temp: 29.259999999999998,
  }

  render(
    <WeatherItem
      applicableDate={weatherItemData.applicable_date}
      minTemp={weatherItemData.min_temp}
      maxTemp={weatherItemData.max_temp}
    />
  )

  expect(await screen.findByText('Wednesday')).toBeVisible()
  expect(await screen.findByText('24.0 - 29.3 ℃')).toBeVisible()
})
