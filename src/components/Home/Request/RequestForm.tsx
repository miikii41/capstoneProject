import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import BottomButton from '../../../common/BottomButton';

const RequestForm = () => {
  const navigation = useNavigation(); // 네비게이션 객체 사용

  // 상태 관리
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedWith, setSelectedWith] = useState<string | null>(null);
  const [isBodyPublic, setIsBodyPublic] = useState(false);
  const [isComplexPublic, setIsComplexPublic] = useState(false);
  const [additionalRequest, setAdditionalRequest] = useState<string>('');

  // 다음 페이지로 데이터를 전달하는 함수
  const handleNextPress = () => {
    if (!selectedPlace || !selectedSeason || !selectedWeather || !selectedStyle || !selectedWith) {
      Alert.alert("모든 항목을 선택해주세요.");
      return;
    }

    navigation.navigate('RequestPage', {
      selectedPlace,
      selectedSeason,
      selectedWeather,
      selectedStyle,
      selectedWith,
      isBodyPublic,
      isComplexPublic,
      additionalRequest,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Request </Text>

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
              onPress={() => setSelectedPlace(place)}
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
              onPress={() => setSelectedSeason(season)}
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
              onPress={() => setSelectedWeather(weather)}
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
          {["캐주얼", "비즈니스", "포멀", "스포티", "스트리트", "미니멀", "빈티지", "페미닌", "힙", "기타"].map((style) => (
            <TouchableOpacity
              key={style}
              style={[
                styles.button,
                selectedStyle === style && styles.selectedButton,
              ]}
              onPress={() => setSelectedStyle(style)}
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
              onPress={() => setSelectedWith(withWho)}
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

        {/* Additional Request Section */}
        <Text style={styles.sectionTitle}>추가 요청사항</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="추가 요청사항을 입력해주세요"
          multiline
          numberOfLines={4}
          value={additionalRequest}
          onChangeText={(text) => setAdditionalRequest(text)}
        />
      </View>

      <View style={{ paddingHorizontal: 45, paddingVertical: 20 }}>
        <BottomButton value='다음' pressed={false} onPress={handleNextPress} />
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
    color: 'black',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: 'black'
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
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

export default RequestForm;