import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가
const MainPage = () => {
  const navigation = useNavigation(); // 네비게이션 객체 사용

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Main Page</Text>

      {/* 버튼들 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SeekerMainPage')}
        >
          <Text style={styles.buttonText}>SeekerMainPage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SetterMainPage')}
        >
          <Text style={styles.buttonText}>SetterMainPage</Text>
        </TouchableOpacity>
      </View>

    <View style={styles.singleButtonContainer}>
        <Text style={styles.buttonText}>임시버튼(하단바 생성후 하단 바로 옮길것)</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MyPageTabView')} >
          <Text style={styles.buttonText}>마이페이지</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.singleButtonContainer}>
          <Text style={styles.buttonText}>임시버튼</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('InitialLogin')} >
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleButtonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RequestPage')} >
            <Text style={styles.buttonText}>Request 작성</Text>
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
});

export default MainPage;