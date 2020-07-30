import axios from 'axios';

class WeatherService {
    constructor() {
        this.latitud = -34.6507;
        this.longitud = -58.6222034;
    }

    async getWeather() {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitud}&lon=${this.longitud}&exclude=current,hourly&appid=b9eec6d7a7247508bc1aeec9bc2dee6c&units=metric`)

        return response;
    }

    async getApidataCloud() {
        const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.latitud}&longitude=${this.longitud}&localityLanguage=en`)

        return response;
    }
}

const weatherService = new WeatherService();
export { weatherService };