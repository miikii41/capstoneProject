import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";

const RequestPage = () => {
  // 상태 관리
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedWith, setSelectedWith] = useState(null);
  const [isBodyPublic, setIsBodyPublic] = useState(false);
  const [isComplexPublic, setIsComplexPublic] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>Request</Text>

      {/* Place Section */}
      <Text style={styles.sectionTitle}>Place</Text>
      <View style={styles.buttonGroup}>
        {["공원", "레스토랑", "카페", "여행", "학교", "기타"].map((place) => (
          <TouchableOpacity
            key={place}
            style={[
              styles.button,
              selectedPlace === place && styles.selectedButton,
            ]}
            onPress={() => setSelectedPlace(place)} // 선택된 항목으로 상태 업데이트
          >
            <Text
              style={[
                styles.buttonText,
                selectedPlace === place && styles.selectedButtonText,
              ]}
            >
              {place}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Season Section */}
      <Text style={styles.sectionTitle}>Season</Text>
      <View style={styles.buttonGroup}>
        {["spring/fall", "summer", "winter"].map((season) => (
          <TouchableOpacity
            key={season}
            style={[
              styles.button,
              selectedSeason === season && styles.selectedButton,
            ]}
            onPress={() => setSelectedSeason(season)} // 선택된 항목으로 상태 업데이트
          >
            <Text
              style={[
                styles.buttonText,
                selectedSeason === season && styles.selectedButtonText,
              ]}
            >
              {season}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

     {/* Weather Section */}
      <Text style={styles.sectionTitle}>Weather</Text>
      <View style={styles.buttonGroup}>
        {["비", "바람", "눈", "습함"].map((weather) => (
          <TouchableOpacity
            key={weather}
            style={[
              styles.button,
              selectedWeather === weather && styles.selectedButton,
            ]}
            onPress={() => setSelectedWeather(weather)} // 선택된 항목으로 상태 업데이트
          >
            <Text
              style={[
                styles.buttonText,
                selectedWeather === weather && styles.selectedButtonText,
              ]}
            >
              {weather}
            </Text>
          </TouchableOpacity>
        ))}
      </View>


      {/* Style Section */}
      <Text style={styles.sectionTitle}>Style</Text>
      <View style={styles.buttonGroup}>
        {[
          "캐주얼",
          "비즈니스",
          "포멀",
          "스포티",
          "스트리트",
          "미니멀",
          "빈티지",
          "페미닌",
          "힙",
          "기타",
        ].map((style) => (
          <TouchableOpacity
            key={style}
            style={[
              styles.button,
              selectedStyle === style && styles.selectedButton,
            ]}
            onPress={() => setSelectedStyle(style)} // 선택된 항목으로 상태 업데이트
          >
            <Text
              style={[
                styles.buttonText,
                selectedStyle === style && styles.selectedButtonText,
              ]}
            >
              {style}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* With Section */}
      <Text style={styles.sectionTitle}>With</Text>
      <View style={styles.buttonGroup}>
        {["친구", "연인", "가족", "비즈니스", "기타"].map((withWho) => (
          <TouchableOpacity
            key={withWho}
            style={[
              styles.button,
              selectedWith === withWho && styles.selectedButton,
            ]}
            onPress={() => setSelectedWith(withWho)} // 선택된 항목으로 상태 업데이트
          >
            <Text
              style={[
                styles.buttonText,
                selectedWith === withWho && styles.selectedButtonText,
              ]}
            >
              {withWho}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

       {/* Toggle Switches */}
      <View style={styles.switchContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>체형 공개</Text>
          <Switch
            value={isBodyPublic}
            onValueChange={(value) => setIsBodyPublic(value)}
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>컴플렉스 공개</Text>
          <Switch
            value={isComplexPublic}
            onValueChange={(value) => setIsComplexPublic(value)}
          />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 35,
    color :'black',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color : 'black'
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 14,
  },
  selectedButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
    switchLabel: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#000",
    },
  switchContainer: {
    marginTop: 20,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default RequestPage;
