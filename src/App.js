import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import { weatherService } from './Utils/weather.service';
import "./App.css";

class App extends Component {

  state = {
    weatherData: null
  }

  async componentDidMount() {
    const response = await weatherService.getWeather();
    this.setState({ weatherData: response.data })
  }

  render() {
    const { weatherData } = this.state;
    return (
      <div>
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </div>
    );
  }
}

export default App;
