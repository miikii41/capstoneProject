import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // 아이콘 변경

function MainWeatherIcon({ weatherState, ...props }) {
  switch (weatherState) {
    case "Thunderstorm":
      return <Icon name="weather-lightning" {...props} />;
    case "Snow":
      return <Icon name="weather-snowy" {...props} />;
    case "Clouds":
      return <Icon name="weather-cloudy" {...props} />;
    case "Clear":
      return <Icon name="weather-sunny" {...props} />;
    case "Haze":
    case "Mist":
    case "Smoke":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <Icon name="weather-fog" {...props} />;
    case "Rain":
      return <Icon name="weather-rainy" {...props} />;
    case "Drizzle":
      return <Icon name="weather-partly-rainy" {...props} />;
    default:
      return <Icon name="weather-cloudy-alert" {...props} />; // 알 수 없는 날씨 상태에 대한 기본 아이콘
  }
}

export default MainWeatherIcon;
