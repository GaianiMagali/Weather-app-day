import rain from "../images/lluvia-ligera.png";
import sunny from "../images/soleado.png";
import cloudy from "../images/nublado.png";
import windy from "../images/ventoso.png";


export const iconWeather = (weather) => {
    switch (weather) {
        case "Sunny":
            return sunny
        case "Rain":
            return rain
        case "Clouds":
            return cloudy
        case "Clear":
            return sunny
        case "Windy":
            return windy
        default:
            return sunny
    }
}