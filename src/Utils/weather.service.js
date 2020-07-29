import axios from 'axios';

class WeatherService {

    async getWeather() {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=-34.5708&lon=-58.6243&exclude=current,hourly&appid=b9eec6d7a7247508bc1aeec9bc2dee6c&units=metric")
        
        return response;
    }
}

const weatherService = new WeatherService();
export { weatherService };