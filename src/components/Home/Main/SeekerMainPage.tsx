import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SeekerMainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Main Page</Text>
      <Text style={styles.subHeader}>Matching</Text>

      <View style={styles.chartContainer}>
        <Text style={styles.chartText}>현재 요청서의 수락 현황은.....</Text>
        <View style={styles.chart} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('WeatherPage')}
        >
          <Icon name="weather-sunny" size={24} color="#333" />
          <Text style={styles.buttonText}>날씨 확인하기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RequestForm')}
        >
          <Icon name="plus-circle-outline" size={24} color="#333" />
          <Text style={styles.buttonText}>요청서 작성하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddCloset')}
        >
          <Icon name="wardrobe-outline" size={24} color="#333" />
          <Text style={styles.buttonText}>CLOSET</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calender')}
        >
          <Icon name="calendar-outline" size={24} color="#333" />
          <Text style={styles.buttonText}>캘린더</Text>
        </TouchableOpacity>


      </View>

<View style={styles.buttonContainer}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('RequestSent')}
  >
    <Text style={styles.buttonText}>REQUEST SENT</Text>
  </TouchableOpacity>
</View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 40,
    fontWeight: '900',
    color: '#ff69b4',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '80%',
  },
  chartText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  chart: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#808080',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
});

export default SeekerMainPage;
