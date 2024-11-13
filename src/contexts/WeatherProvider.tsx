import React, { createContext, useEffect, useState, ReactNode } from "react";

// Weather 데이터 타입 정의
interface WeatherInfo {
  name?: string;
  temp?: number;
  humidity?: number;
  pressure?: number;
  weatherState?: string;
  feels_like?: number;
  speed?: number;
  deg?: number;
  hourly?: any[];
  sunset?: number;
  sunrise?: number;
  temp_min?: number;
  temp_max?: number;
}

interface WeatherProviderProps {
  children: ReactNode;
}

// Context 생성
export const WeatherContext = createContext<WeatherInfo>({});

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({});

  const getWeatherInfo = async () => {
    try {
      // API Key 문자열로 선언
      const apiKey = 'ed3c39553ec3b5017d413d3b752b70d1'; // API 키를 문자열로 감쌈

      // 현재 날씨 정보 API 호출
      const currentWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=seoul&units=metric`;
      const currentWeatherInfoResponse = await fetch(currentWeatherInfoAPI);

      if (!currentWeatherInfoResponse.ok) {
        throw new Error(`Failed to fetch current weather: ${currentWeatherInfoResponse.status}`);
      }

      const currentWeatherInfo = await currentWeatherInfoResponse.json();

      const {
        name,
        coord: { lat, lon },
        main: {
          temp,
          humidity,
          pressure,
          feels_like,
          temp_min,
          temp_max,
        },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      } = currentWeatherInfo;

      // 날씨 예보 정보 API 호출
      const hourlyWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      const hourlyWeatherInfoResponse = await fetch(hourlyWeatherInfoAPI);

      if (!hourlyWeatherInfoResponse.ok) {
        throw new Error(`Failed to fetch hourly weather: ${hourlyWeatherInfoResponse.status}`);
      }

      const hourlyWeatherInfo = await hourlyWeatherInfoResponse.json();
      const { list: hourly } = hourlyWeatherInfo; // API에서 'list'로 데이터를 가져옴

      // 상태 업데이트
      setWeatherInfo({
        name,
        temp,
        humidity,
        pressure,
        weatherState,
        feels_like,
        speed,
        deg,
        hourly,
        sunset,
        sunrise,
        temp_min,
        temp_max,
      });
    } catch (error) {
      console.error(error); // 에러 처리
    }
  };

  useEffect(() => {

    // 컴포넌트가 마운트될 때 한 번 날씨 정보 호출
    getWeatherInfo();

    // 1분마다(getWeatherInfo) 호출
    const interval = setInterval(() => {
      getWeatherInfo();
    }, 1 * 60 * 1000); // 1분 = 60초 * 1000밀리초

    // 컴포넌트가 언마운트될 때 인터벌 정리
    return () => clearInterval(interval);
  }, []);
  return (
    <WeatherContext.Provider value={{ ...weatherInfo }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
