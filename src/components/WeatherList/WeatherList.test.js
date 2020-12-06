import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import WeatherList from './WeatherList';

afterEach(() => {
    cleanup();
});

test('renders without crashing', () => {
    render(<WeatherList />);
});

test('snapshot testing', () => {
    let renderResult = render(<WeatherList />);
    expect(renderResult.container.firstChild).toMatchSnapshot();

    const testData = [
        {
            id: 1,
            applicableDate: '2020-10-28',
            minTemp: 23.97,
            maxTemp: 29.259999999999998,
        },
    ];

    renderResult = render(<WeatherList weathers={testData} />);
    expect(renderResult.container.firstChild).toMatchSnapshot();
});

test('should display an array of WeatherItem', () => {
    const testData = Array(5)
        .fill(0)
        .map((_, idx) => ({
            id: idx,
            applicableDate: '2020-10-28',
            minTemp: 23.97,
            maxTemp: 29.259999999999998,
        }));

    render(<WeatherList weathers={testData} />);

    expect(screen.queryAllByText('Wednesday').length).toBe(5);
    expect(screen.queryAllByText('24.0 - 29.3 ℃').length).toBe(5);
});
