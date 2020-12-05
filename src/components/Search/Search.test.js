import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from './Search'

// test("renders without crashing", () => {
//   render(<Search />, container);
//   // expect(container.innerHTML).toMatchSnapshot();
// });

test('should display default placeholder', () => {
    const {queryByPlaceholderText} = render(<Search />)
    expect(queryByPlaceholderText('Search')).toBeVisible()
})

test('should display placeholder', () => {
    const {queryByPlaceholderText} = render(<Search placeholder="Enter a city" />)
    expect(queryByPlaceholderText('Enter a city')).toBeVisible()
})

test('should trigger onSearch callback', () => {
    const handleSearch = jest.fn()
    render(<Search onSearch={handleSearch} />)

    const searchFrom = screen.getByTestId('search-form')
    fireEvent.submit(searchFrom)

    expect(handleSearch).toHaveBeenCalledTimes(1)
})
