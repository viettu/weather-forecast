import React from "react";
import PropTypes from "prop-types";

import './WeatherList.css';

import WeatherItem from "../WeatherItem/WeatherItem";

const WeatherList = ({weathers}) => {
    const list = weathers.map(weather => {
        return (
            <li key={weather.id} className="WeatherList-item">
                <WeatherItem
                    applicableDate={weather.applicableDate}
                    maxTemp={weather.maxTemp}
                    minTemp={weather.minTemp}
                />
            </li>
        )
    })

    return (
        <ul className="WeatherList-container">
            { list }
        </ul>
    )
}

WeatherList.propTypes = {
    weathers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            day: PropTypes.string,
            min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            max: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    ),
    error: PropTypes.instanceOf(Error)
};

export default WeatherList;