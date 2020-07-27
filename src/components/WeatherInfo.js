import React from 'react';
import CurrentDay from './CurrentDay';
import NextDays from './NextDays';

const WeatherInfo = ({ weatherData }) => {
    const currentDay = weatherData.daily[0]
    const nextDays = weatherData.daily.filter((d, i) => i > 0);

    return (
        <div>
            <div className="header-img" ></div>
            <CurrentDay day={currentDay} timeZone_offset={weatherData.timezone_offset} />
            <NextDays nextDays={nextDays} />
        </div>
    )
}

export default WeatherInfo;