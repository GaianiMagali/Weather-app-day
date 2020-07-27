import React, { Component } from 'react';
import axios from 'axios';
import WeatherInfo from './components/WeatherInfo';
import "./App.css";

class App extends Component {

  state = {
    weatherData: null
  }

  async componentDidMount() {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=-34.5708&lon=-58.6243&exclude=current,hourly&appid=b9eec6d7a7247508bc1aeec9bc2dee6c&units=metric")
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
