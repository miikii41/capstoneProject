import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SetterMainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Main Page</Text>
      <Text style={styles.subHeader}>Matching</Text>

      <View style={styles.chartContainer}>
        <Text>현재 요청서의 수락 현황은.....</Text>
        <View style={styles.chart}></View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RequestApproval')}
        >
          <Icon name="check" size={20} color="#333" style={{ marginRight: 5 }} />
          <Text style={styles.buttonText}>요청서 수락하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.iconWrapper}>
            <Icon name="plus" size={16} color="#333" />
          </View>
          <Text style={styles.buttonText}>제안서 작성하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.singleButtonContainer}>
        <TouchableOpacity
          style={styles.singleButton}
          onPress={() => navigation.navigate('MyPageTabView')}
        >
          <Text style={styles.buttonText}>마이페이지</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 36,
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
  chart: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#808080',
    marginTop: 10,
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
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    flexDirection: 'row', // To align icon and text in a row
  },
  iconWrapper: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#e0e0e0', // Gray background for the circle
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  singleButton: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SetterMainPage;
