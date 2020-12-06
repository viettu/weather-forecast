import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import withErrorMessage from './withErrorMessage';

const WrapComponent = () => {
    return 'Wrap component';
}
const WrapComponentWithErrorMessage = withErrorMessage(WrapComponent);

afterEach(() => {
    cleanup();
});

test('should display the error message instead of wrapped components', () => {
    const { getByText, queryByText } = render(
        <WrapComponentWithErrorMessage errorMessage={'I am an error message!'} />
    );

    expect(getByText('I am an error message!')).toBeVisible();
    expect(queryByText('Wrap component')).toBeFalsy();
});

test('should display wrap component when the error message is empty', () => {
    const { getByText, queryByText } = render(
        <WrapComponentWithErrorMessage errorMessage="" />
    );

    expect(queryByText('I am an error message!')).toBeFalsy();
    expect(getByText('Wrap component')).toBeVisible();
});
