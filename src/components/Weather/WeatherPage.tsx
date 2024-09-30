import React from "react";
import { View, StyleSheet } from "react-native"; // View와 StyleSheet 추가
import MainWeather from "./MainWeather"; // MainWeather 불러오기
import SubWeather from "./SubWeather";   // SubWeather 불러오기

function WeatherPage() {
  return (
    <View style={styles.weatherPage}>
      <MainWeather />
      <SubWeather />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeatherPage;
