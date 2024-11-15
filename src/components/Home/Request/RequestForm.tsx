import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import PhotoOptions, { PhotoResultProps } from '../../../common/PhotoOptions';
import BottomButton from '../../../common/BottomButton';

const RequestForm = () => {
  const navigation = useNavigation(); // 네비게이션 객체 사용

  // 상태 관리
  const [photos, setPhotos] = useState<PhotoResultProps[]>([]);
  const [refPhotos, setRefPhotos] = useState<PhotoResultProps[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedWith, setSelectedWith] = useState<string | null>(null);
  const [isBodyPublic, setIsBodyPublic] = useState(false);
  const [isComplexPublic, setIsComplexPublic] = useState(false);
  const [additionalRequest, setAdditionalRequest] = useState<string>('');

  // 디버깅을 위해 photos 상태가 업데이트될 때마다 출력
  useEffect(() => {
    console.log('Updated photos:', photos);
  }, [photos]);

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
       photos,
     });
   };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Request</Text>

        <Text style={styles.sectionTitle}>Clothes</Text>

        <View style={{ marginTop: 10, marginLeft: 120, marginRight: 120 }}>
          <PhotoOptions
            style={Object.assign({}, styles.grayButton, { marginRight: 5, marginBottom: 5 })}
            max={4}
            setPhoto={(newPhotos) => {
              // 새로운 사진 배열을 { uri: ... } 형태로 변환
              const formattedPhotos = newPhotos.map(photo => {
                // photo가 단순 문자열일 경우 객체로 변환
                if (typeof photo === 'string') {
                  return { uri: photo };
                }
                // 이미 객체인 경우 그대로 사용
                return photo;
              });

              // 기존 사진 배열에 새 사진을 추가
              setPhotos(prevPhotos => [...prevPhotos, ...formattedPhotos]);
            }}
            buttonLabel='Select Photos'
          />
        </View>


        <View style={styles.photosContainer}>
          {photos.map((photo, index) => (
            <Image
              key={index}
              source={{ uri: photo.uri }}
              style={styles.photo}
            />
          ))}
        </View>


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
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
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
    color: 'white',
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
  grayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    marginBottom: 20,
    paddingVertical: 6,
  },
});

export default RequestForm;
