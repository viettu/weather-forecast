import {useEffect, useState} from 'react';
import metaWetherApi from '../api/metaWeatherAPI';

const useFetchWeatherData = (location) => {
    const [isLoading, setIsLoading] = useState(false);
    const [weatherForecasts, setWeatherForecasts] = useState([]);
    const [locationTitle, setLocationTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWheather = async () => {
            try {
                setWeatherForecasts([]);
                setIsLoading(true);
                setError(null);

                const locationData = await metaWetherApi.getLocations(location);
                if (!locationData || locationData.length === 0) {
                    setWeatherForecasts([]);
                    setIsLoading(false);
                    return;
                }

                const {woeid, title} = locationData[0];
                setLocationTitle(title);

                const weatherData = await metaWetherApi.getWeathers(woeid);
                if (!weatherData) {
                    setWeatherForecasts([]);
                    setIsLoading(false);
                    return;
                }

                const fiveDayForecasts = weatherData.consolidated_weather.slice(0, 5) || [];
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
        };

        if (location) {
            loadWheather();
        }
    }, [location]);

    return {locationTitle, weatherForecasts, isLoading, error};
};

export default useFetchWeatherData;
