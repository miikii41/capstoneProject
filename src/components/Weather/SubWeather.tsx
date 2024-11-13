import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // 아이콘 대체
import { WeatherContext } from "../../contexts/WeatherProvider"; // WeatherContext를 가져옴

// WeatherContext 데이터 타입 정의
interface WeatherContextType {
  sunrise?: number;
  sunset?: number;
  speed?: number;
  humidity?: number;
}

function SubWeather() {
  // WeatherContext에서 필요한 상태를 받아옴
  const { sunrise, sunset, speed, humidity } = useContext<WeatherContextType>(WeatherContext);

  // 일출 시간을 초에서 밀리세컨드로 변환하여 표시
  const formattedSunrise = sunrise
    ? new Date(sunrise * 1000).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })
    : "N/A";

  const formattedSunset = sunset
    ? new Date(sunset * 1000).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })
    : "N/A";



  return (
    <View style={styles.subWeather}>
      {/* 일출 시간 표시 */}
      <View style={styles.subWeatherItem}>
        <Icon name="weather-sunset-up" size={30} color="#FFA500" />
        <Text style={styles.subWeatherText}>
          <Text>SUNRISE</Text> {formattedSunrise}
        </Text>
      </View>


      <View style={styles.subWeatherItem}>
        <Icon name="weather-sunset" size={30} color="#FFA500" />
        <Text style={styles.subWeatherText}>
          <Text>SUNSET</Text> {formattedSunset}
        </Text>
      </View>


      {/* 바람 속도 표시 */}
      <View style={styles.subWeatherItem}>
        <Icon name="weather-windy" size={30} color="#00BFFF" />
        <Text style={styles.subWeatherText}>
          <Text>WIND</Text> {speed ? `${speed} m/s` : "N/A"}
        </Text>
      </View>

      {/* 습도 표시 */}
      <View style={styles.subWeatherItem}>
        <Icon name="water-percent" size={30} color="#1E90FF" />
        <Text style={styles.subWeatherText}>
          <Text>HUMIDITY</Text> {humidity ? `${humidity}%` : "N/A"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subWeather: {
    padding: 10,
  },
  subWeatherItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  subWeatherText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default SubWeather;
