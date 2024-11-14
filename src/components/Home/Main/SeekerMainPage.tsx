import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가

const SeekerMainPage = () => {
  const navigation = useNavigation(); // 네비게이션 객체 사용
  return (
    <View style={styles.container}>

      <Text style={{...styles.header, marginBottom:40, color: 'black' }}>Main Page</Text>
      <Text style={styles.subHeader}>Matching</Text>

      <View style={styles.chartContainer}>
        <Text>현재 요청서의 수락 현황은.....</Text>
      </View>

      {/* 버튼들 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('WeatherPage')}
        >
          <Text style={styles.buttonText}>날씨 확인하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
           onPress={() => navigation.navigate('RequestForm')} >
          <Text style={styles.buttonText}>요청서 작성하기</Text>
        </TouchableOpacity>
      </View>






      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('AddCloset')}
         >
          <Text style={styles.buttonText}>Add Closet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('ClosetMain')}
         >
          <Text style={styles.buttonText}>YOUR Closet</Text>
        </TouchableOpacity>
    </View>



      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>캘린더</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: '900',
    marginBottom: 10,

  },
  subHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  singleButtonContainer: {
    alignItems: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 60,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SeekerMainPage;
