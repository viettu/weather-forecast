import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import WeatherItem from './WeatherItem';

afterEach(() => {
    cleanup();
});

const weatherItemData = {
    applicable_date: '2020-10-28',
    min_temp: 23.97,
    max_temp: 29.259999999999998,
};

test('renders without crashing', () => {
    render(<WeatherItem />);
});

test('snapshot testing', () => {
    let renderResult = render(<WeatherItem />);
    expect(renderResult.container.firstChild).toMatchSnapshot();

    renderResult = render(
        <WeatherItem
            applicableDate={weatherItemData.applicable_date}
            minTemp={weatherItemData.min_temp}
            maxTemp={weatherItemData.max_temp}
        />
    );
    expect(renderResult.container.firstChild).toMatchSnapshot();
});

test('display information', async () => {
    render(
        <WeatherItem
            applicableDate={weatherItemData.applicable_date}
            minTemp={weatherItemData.min_temp}
            maxTemp={weatherItemData.max_temp}
        />
    );

    expect(await screen.findByText('Wednesday')).toBeVisible();
    expect(await screen.findByText('24.0 - 29.3 ℃')).toBeVisible();
});
