import React from 'react';
import {render, cleanup, screen, act, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import metaWeatherAPI from '../../api/metaWeatherAPI';
import {mockLocations, mockWeathers} from '../../tests/mockTestingData';
import SearchWeathers from './SearchWeathers';

beforeEach(() => {
    jest.spyOn(metaWeatherAPI, 'getLocations').mockImplementation(() => Promise.resolve(mockLocations));
    jest.spyOn(metaWeatherAPI, 'getWeathers').mockImplementation(() => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockWeathers), 500);
        });
    });
});

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

test('renders without crashing', () => {
    render(<SearchWeathers />);
});

test('should not load weather in initialization', async () => {
    render(<SearchWeathers />);
    expect(screen.queryByTestId('loading-indicator')).toBeFalsy();
    expect(screen.queryByPlaceholderText('Enter a location... Ex. Ho Chi Minh City')).toBeVisible();
});

test('should load weathers', async () => {
    render(<SearchWeathers />);

    const searchInput = screen.getByPlaceholderText('Enter a location... Ex. Ho Chi Minh City');
    const searchButton = screen.getByText('Search', {selector: 'button'});

    userEvent.type(searchInput, 'Hou');
    act(() => {
        userEvent.click(searchButton);
    });

    await waitForElementToBeRemoved(() => screen.getByTestId('loading-indicator'));

    expect(screen.getByText('Houston')).toBeVisible();

    expect(screen.getByText('Friday', {selector: 'h3'})).toBeVisible();
    expect(screen.getByText('6.5 - 14.2 ℃')).toBeVisible();

    expect(screen.getByText('Tuesday', {selector: 'h3'})).toBeVisible();
    expect(screen.getByText('8.0 - 19.3 ℃')).toBeVisible();
});

test('should show the error when loading failure', async () => {
    jest.clearAllMocks();
    jest.spyOn(metaWeatherAPI, 'getLocations').mockImplementation(() => Promise.reject('ERROR'));

    render(<SearchWeathers />);
    const searchInput = screen.getByPlaceholderText('Enter a location... Ex. Ho Chi Minh City');
    const searchButton = screen.getByText('Search', {selector: 'button'});

    userEvent.type(searchInput, 'Houston');
    act(() => {
        userEvent.click(searchButton);
    });

    await waitForElementToBeRemoved(() => screen.getByTestId('loading-indicator'));

    expect(
        screen.getByText('Something went wrong when loading Houston. Please try again later!', {selector: 'div'})
    ).toBeVisible();
});
