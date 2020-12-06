import React from 'react';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Search from './Search';

afterEach(() => {
    cleanup();
});

test('renders without crashing', () => {
    render(<Search />);
});

test('snapshot testing', () => {
    let renderResult = render(<Search />);
    expect(renderResult.container.firstChild).toMatchSnapshot();

    renderResult = render(<Search placeholder="Custom placeholder" />);
    expect(renderResult.container.firstChild).toMatchSnapshot();
});

test('should display default placeholder', () => {
    const {queryByPlaceholderText} = render(<Search />);
    expect(queryByPlaceholderText('Search')).toBeVisible();
});

test('should display placeholder', () => {
    const {queryByPlaceholderText} = render(<Search placeholder="Enter a city" />);
    expect(queryByPlaceholderText('Enter a city')).toBeVisible();
});

test('should trigger onSearch callback', () => {
    const handleSearch = jest.fn();
    render(<Search onSearch={handleSearch} />);

    const searchFrom = screen.getByTestId('search-form');
    fireEvent.submit(searchFrom);

    expect(handleSearch).toHaveBeenCalledTimes(1);
});

test('click search button should trigger onSearch callback', () => {
    const handleSearch = jest.fn();
    render(<Search onSearch={handleSearch} />);

    const searchButton = screen.getByText('Search', {selector: 'button'});
    userEvent.click(searchButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
});
