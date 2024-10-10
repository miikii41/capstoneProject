import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가

const RequestApproval = () => {

  const navigation = useNavigation(); // 네비게이션 객체 사용

  return (
    <View style={styles.container}>
      <Text style={{...styles.header, marginBottom:40, color: 'black' }}>Request</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.hashtags}>#hashtag1  #hashtag2  #hashtag3</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>거절</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>수락</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{marginTop: 10, alignSelf: 'flex-end' }}
              onPress={() => navigation.navigate('RequestPage')}>
              <Text style={{ color: 'gray', fontSize: 14, fontWeight: 'bold' , textDecorationLine: 'underline'}}>주문서 확인</Text>

           </TouchableOpacity>



          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  header: {
    fontSize: 50,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 40,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  rowContainer: {
    marginBottom: 20,
    marginBottom: 20, // 구분선과 아래 요소 간 간격 조절
    borderBottomWidth: 1, // 구분선 두께
    borderBottomColor: 'gray', // 구분선 색상
    paddingBottom: 10, // 구분선과 버튼 간의 간격 조절
  },
  hashtags: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color:'black',
  },

});

export default RequestApproval;