import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RequestAccepted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Dora님의 요청서를 수락하셨습니다!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RequestApproval')}
      >
        <Text style={styles.buttonText}>돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'deeppink',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'deeppink',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RequestAccepted;
