import React from 'react';
import PropTypes from 'prop-types';

import isoToDayWeek from '../../helpers/isoToDayWeek';
import formatTemperature from '../../helpers/formatTemperature';

import './WeatherItem.css';

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
    minTemp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxTemp: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default WeatherItem;
