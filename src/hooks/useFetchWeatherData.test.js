import {renderHook, cleanup} from '@testing-library/react-hooks';
import * as metaWeatherAPI from '../api/metaWeatherAPI';
import {mockLocations, mockWeathers} from '../tests/mockTestingData';
import useFetchWeatherData from './useFetchWeatherData';

afterEach(() => {
    jest.clearAllMocks();
    cleanup();
});

test('loading success', async () => {
    jest.spyOn(metaWeatherAPI, 'getLocations').mockImplementation(() => Promise.resolve(mockLocations));
    jest.spyOn(metaWeatherAPI, 'getWeathers').mockImplementation(() => Promise.resolve(mockWeathers));

    const {result, waitForNextUpdate} = renderHook(() => useFetchWeatherData('Houston'));
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.error).toBeFalsy();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.locationTitle).toEqual('Houston');
    expect(result.current.weatherForecasts.length).toEqual(5);
});

test('loading failure', async () => {
    jest.spyOn(metaWeatherAPI, 'getLocations').mockImplementation(() => Promise.reject('ERROR'));

    const {result, waitForNextUpdate} = renderHook(() => useFetchWeatherData('Houston'));
    expect(result.current.isLoading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.error).toEqual('ERROR');
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.locationTitle).toBeFalsy();
    expect(result.current.weatherForecasts).toEqual([]);
});
