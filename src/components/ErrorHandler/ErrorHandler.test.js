import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ErrorHandler} from './ErrorHandler';

beforeAll(() => {
    /* eslint-disable no-console */
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => cleanup());

afterAll(() => {
    /* eslint-disable no-console */
    console.error.mockRestore();
});

const Err = ({showError}) => {
    if (showError) {
        throw new Error('ERROR');
    }
};

test('should display error', async () => {
    render(
        <ErrorHandler>
            <Err showError={true} />
        </ErrorHandler>
    );

    expect(await screen.findByText('Hey! Something bad is happening... We will check it!')).toBeVisible();
});
