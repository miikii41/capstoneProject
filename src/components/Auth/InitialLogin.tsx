import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가

const InitialLogin = () => {
  const navigation = useNavigation(); // 네비게이션 객체 사용

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      {/* 버튼들 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SeekerLogin')}
        >
          <Text style={styles.buttonText}>SeekerLogin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SetterLogin')}
        >
          <Text style={styles.buttonText}>SetterLogin</Text>
        </TouchableOpacity>

      </View>

    <View style={styles.textButtonContainer}>
        <TouchableOpacity onPress={() => { /* 비밀번호찾기 기능 */ }}>
          <Text style={styles.textButton}>비밀번호 찾기     </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* 회원가입 기능 */ }}>
          <Text style={styles.textButton}>  회원가입</Text>
        </TouchableOpacity>
      </View>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
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
    width: 160,
    height: 60,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 10,  // 위와의 간격을 위한 여백
  },
  textButton: {
    fontSize: 14,  // 글씨 크기
    color: 'black', // 버튼 글씨 색상
  },
});

export default InitialLogin;