import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import humidity from "../images/humedad.png"
import pressure from "../images/barometro.png"
import wind from "../images/viento.png"
import sunset from "../images/puesta-del-sol.png"
import sunrise from "../images/subir.png"
import daytime from "../images/hora.png"
import { iconWeather } from "../Utils/iconWeather";
import moment from "moment";

export default function CurrentDay({ day, timeZone_offset }) {
    const parseUtcFormat = (dt) => {
        return moment.unix(dt).utc().format("LLLL")
    }
    const parseInt = (value) => {
        return Math.round(value);
    }
    const parseFormatLt = (date) => {
        return moment.unix(date).format("LT")
    }

    const parseFormatDate = (date) => {
        const dayTime = moment.unix(date).format("HH:mm");
        const dayTimeSplit = dayTime.split(":");
        const hours = dayTimeSplit[0].concat("H ");
        const minutes = dayTimeSplit[1].concat("M");
        return hours + minutes;
    }

    return (
        <div>
            <div className="row">
                <div className="col-6 col-md-3 offset-md-2">
                    <center className="mt-2 ml-2">
                        <span className="opacity font-dt-location"> {parseUtcFormat(day.dt)}</span>
                    </center>
                </div>
                <div className="col-6 col-md-3 offset-md-2 location">
                    <center className="mt-3 py-2">
                        <span className="font-dt-location">San Martin, Buenos Aires </span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </center>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="p-4 col-4">
                        <center>
                            <img src={iconWeather(day.weather[0].main)} className="opacity mt-3 icon-day" alt="icon" />
                            <span className="d-block font-icon">{day.weather[0].main}</span>
                        </center>
                    </div>
                    <div className="p-4 col-4">
                        <center>
                            <span className="fontSize-temp">{parseInt(day.temp.day)}</span>
                            <span className="degreeDay">°C</span>
                        </center>
                    </div>
                    <div className="p-4 col-4 mt-3">
                        <center className="tem-min-max">
                            <div>
                                <span className="opacity fontSize-min-max ">{parseInt(day.temp.max)}°C </span>
                                <FontAwesomeIcon icon={faLongArrowAltUp} className="opacity" />
                            </div>
                            <div>
                                <span className="opacity fontSize-min-max ">{parseInt(day.temp.min)}°C </span>
                                <FontAwesomeIcon icon={faLongArrowAltDown} className="opacity" />
                            </div>
                        </center>
                    </div>
                    <div className="p-4 col-4">
                        <center>
                            <img src={humidity} alt="humidity" className="opacity d-flex justify-content-center icon" />
                            <span className="d-block font-icon">{day.humidity}%</span>
                            <span className="opacity">Humidity</span>
                        </center>
                    </div>
                    <div className="p-4 col-4">
                        <center>
                            <img src={pressure} alt="pressure"
                                className="opacity aline-items-center icon" />
                            <span className="d-block font-icon">{day.pressure}mBar</span>
                            <span className="opacity">Pressure</span>
                        </center>
                    </div>
                    <div className="p-4 col-4">
                        <center>
                            <img src={wind} alt="wind" className="opacity icon" />
                            <span className="d-block font-icon">{parseInt(day.wind_speed)}km/h</span>
                            <span className="opacity">Wind</span>
                        </center>
                    </div>
                    <div className="p-4 col-4">
                        <center>
                            <img src={sunrise} alt="sunrise" className="opacity icon" />
                            <span className="d-block font-icon">{parseFormatLt(day.sunrise)}</span>
                            <span className="opacity">Sunrise</span>
                        </center>
                    </div>
                    <div className="p-4 col-4">
                        <center>
                            <img src={sunset} alt="sunset" className="opacity icon" />
                            <span className="d-block font-icon">{parseFormatLt(day.sunset)}</span>
                            <span className="opacity">Sunset</span>
                        </center>
                    </div>
                    <div className="p-4 col-4">
                        <center>
                            <img src={daytime} alt="daytime" className="opacity icon" />
                            <span className="d-block font-icon">{parseFormatDate(timeZone_offset)}</span>
                            <span className="opacity">Daytime</span>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
