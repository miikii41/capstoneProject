import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChooseUserType = () => {
  const navigation = useNavigation(); // 네비게이션 객체 사용

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create As</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SeekerSignUp')}  // Seeker 회원가입 페이지로 이동
      >
        <Text style={styles.buttonText}>Seeker</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SetterSignUp')}  // Setter 회원가입 페이지로 이동
      >
        <Text style={styles.buttonText}>Setter</Text>
      </TouchableOpacity>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChooseUserType;
