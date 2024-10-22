import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherProvider"; // WeatherContext를 가져옴
import MainWeatherIcon from "../../common/MainWeatherIcon"; // 날씨 아이콘 컴포넌트
import dayjs from "dayjs";
import { View, Text, StyleSheet } from "react-native"; // React Native 컴포넌트
import TemperatureGraph from "../../contexts/TemperatureGraph";

// 날씨 데이터에 대한 타입 정의
interface WeatherContextType {
  name?: string;
  temp?: number;
  weatherState?: string;
  temp_min?: number;
  temp_max?: number;
}

function MainWeather() {
  // WeatherContext에서 필요한 상태를 받아옴
  const { name, temp, weatherState, temp_min, temp_max } =
    useContext<WeatherContextType>(WeatherContext);

  return (
    <View style={styles.weather}>
      {/* 도시 이름 */}
      <Text style={styles.city}>{name?.toUpperCase()}</Text>

            {/* 요일과 시간 표시 */}
            <View style={styles.today}>
              <Text>{dayjs().format("dddd").toUpperCase()}</Text>
              <Text>{dayjs().format("H:mm A")}</Text>
            </View>

      {/* 날씨 아이콘 */}
      <View style={styles.weatherIcon}>
        <MainWeatherIcon weatherState={weatherState} size={60} viewBox="0 0 30 30" />
      </View>

      {/* 현재 온도 및 상세 날씨 정보 */}
      <View style={styles.detailWeather}>
        <View>
          <Text style={styles.temp}>{parseFloat(String(temp)).toFixed(1)}&deg;</Text>
          <View style={styles.detailItem}>
            <Text>&#9663;{parseFloat(String(temp_min)).toFixed(1)}&deg;</Text>
            <Text>&#9653;{parseFloat(String(temp_max)).toFixed(1)}&deg;</Text>
          </View>
        </View>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  weather: {
    alignItems: "center",
    justifyContent: "center",
  },
  city: {
    marginTop:50,
    fontSize: 40,
    fontWeight: "bold",
  },
  weatherIcon: {
    marginVertical: 10,
  },
  detailWeather: {
    alignItems: "center",

  },
  temp: {
    fontSize: 32,
    fontWeight: "bold",
    color:'black',
  },
  detailItem: {

    fontSize: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  today: {
    marginTop: 10,
  },
});

export default MainWeather;
