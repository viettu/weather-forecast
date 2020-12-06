import React, {useState} from 'react';

import './SearchWeathers.css';

import useFetchWeatherData from '../../hooks/useFetchWeatherData';
import Search from '../../components/Search/Search';
import WeatherList from '../../components/WeatherList/WeatherList';
import {Col, Container, Row, Spinner} from 'react-bootstrap';

const SearchWeathers = () => {
    const [location, setLocation] = useState('');
    const {locationTitle, weatherForecasts, isLoading, error} = useFetchWeatherData(location);

    return (
        <Container className="Weather-container" fluid>
            <Row className="justify-content-md-center">
                <Col>
                    <h1>WEATHER FORECAST</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={9} lg={6} xl={4} className="Weather-search">
                    <Search
                        onSearch={setLocation}
                        autoFocus={true}
                        placeholder="Enter a location... Ex. Ho Chi Minh City"
                    />
                </Col>
            </Row>
            {isLoading && (
                <Row className="justify-content-md-center" data-testid="loading-indicator">
                    <Col>
                        <Spinner animation="border" variant="primary" />
                    </Col>
                </Row>
            )}
            <Row className="justify-content-md-center">
                <Col md={8} className="Weather-list">
                    {error && (
                        <div className="Weather-error">{`Something went wrong when loading ${
                            locationTitle || location
                        }. Please try again later!`}</div>
                    )}
                    {weatherForecasts.length > 0 && <h2>{locationTitle}</h2>}
                    <WeatherList weathers={weatherForecasts} />
                </Col>
            </Row>
        </Container>
    );
};

export default SearchWeathers;
