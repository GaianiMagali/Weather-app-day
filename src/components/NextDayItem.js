import React from 'react'
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { iconWeather } from "../Utils/iconWeather";

export default function NextDayItem({ day }) {
    const parseDay = (dt) => {
        return moment.unix(dt).format("ddd");
    }

    return (
        <div className="item-day mx-2">
            <center className="mt-2">
                {<img className="opacity" src={iconWeather(day.weather[0].main)} alt="icon" width="40%" />}
                <span className="opacity d-block item-day-span">{parseDay(day.dt)}</span>
                <div className="d-inline">
                    <span className="opacity item-day-span">{parseInt(day.temp.max)}°C </span>
                    <FontAwesomeIcon icon={faLongArrowAltUp} className="opacity mr-2" />
                </div>
                <div className="d-inline">
                    <span className="opacity item-day-span">{parseInt(day.temp.min)}°C </span>
                    <FontAwesomeIcon icon={faLongArrowAltDown} className="opacity" />
                </div>
            </center>

        </div>
    )
}
