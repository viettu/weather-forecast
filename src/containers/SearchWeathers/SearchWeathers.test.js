import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

import SearchWeathers from './SearchWeathers'

test('renders without crashing', () => {
    render(<SearchWeathers />)
})
