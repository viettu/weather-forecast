import React from 'react';
import PropTypes from 'prop-types';

import './WeatherItem.css';

import isoToDayWeek from '../../helpers/isoToDayWeek';
import formatTemperature from '../../helpers/formatTemperature';

const WeatherItem = ({applicableDate, minTemp, maxTemp}) => {
    return (
        <div className="WeatherItem-container">
            <h3>{isoToDayWeek(applicableDate)}</h3>
            <div className="WeatherItem-temperature">{`${formatTemperature(minTemp)} - ${formatTemperature(
                maxTemp
            )} ℃`}</div>
        </div>
    );
};

WeatherItem.propTypes = {
    applicableDate: PropTypes.string,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
};

export default WeatherItem;
