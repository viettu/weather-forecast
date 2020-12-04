import { useEffect, useState } from 'react';
import metaWeatherAPI from '../api/metaWeatherAPI';
// import { MockCities, MockWeathersData } from "../api/metaWeatherAPI.data";

const useFetchWeatherData = (location) => {
    const [isLoading, setIsLoading] = useState(false);
    const [weatherForecasts, setWeatherForecasts] = useState([]);
    const [locationTitle, setLocationTitle] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWheather = async () => {
            try {
                setWeatherForecasts([]);
                setIsLoading(true);

                const locationData = await getLocation(location);
                if (!locationData || locationData.length === 0) {
                    setWeatherForecasts([]);
                    setIsLoading(false);
                    return;
                }

                const {woeid, title} = locationData[0];
                setLocationTitle(title);

                const weatherData = await getWeather(woeid);
                if (!weatherData) {
                    setWeatherForecasts([]);
                    setIsLoading(false);
                    return;
                }

                const fiveDayForecasts = weatherData.consolidated_weather.splice(0, 5) || [];
                setWeatherForecasts(
                    fiveDayForecasts.map((data) => ({
                        id: data.id,
                        applicableDate: data.applicable_date,
                        minTemp: data.min_temp,
                        maxTemp: data.max_temp,
                    }))
                );

                setIsLoading(false);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        if (location) {
            loadWheather();
        }

    }, [location]);

    const getLocation = async (location) => {
        const response = await metaWeatherAPI.get(`/location/search`, {
            params: {
                query: location
            }
        });
        return response.data;
    };

    const getWeather = async (woeid) => {
        const response = await metaWeatherAPI.get(`/location/${woeid}`);
        return response.data;
    }

    // const getLocationMock = async (location) => {
    //     return location ? MockCities : [];
    // };

    // const getWeatherMock = async (woeid) => {
    //     return woeid ? MockWeathersData : {};
    // }

    return [locationTitle, weatherForecasts, isLoading, error];
}

export default useFetchWeatherData;