import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 네비게이션 훅 추가
import BottomButton from '../../../common/BottomButton';

const RequestSent = () => {
     const navigation = useNavigation(); // 네비게이션 객체 사용

     const handleNextPress = () => {
       navigation.navigate('SeekerMainPage');
     };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR REQUEST HAS BEEN SENT !</Text>
      <View style={styles.SetterList}>
        <View style={styles.Setter}>
          <Image source={require('../../../assets/common/UserIcon.png')} style={styles.icon} />
        </View>
        <View style={styles.Setter}>
          <Image source={require('../../../assets/common/UserIcon.png')} style={styles.icon} />
        </View>
        <View style={styles.Setter}>
          <Image source={require('../../../assets/common/UserIcon.png')} style={styles.icon} />
        </View>
        <View style={styles.Setter}>
          <Image source={require('../../../assets/common/UserIcon.png')} style={styles.icon} />
        </View>
        <View style={styles.Setter}>
          <Image source={require('../../../assets/common/UserIcon.png')} style={styles.icon} />
        </View>

      </View>
      <Text style={styles.note}>*이중 선정순 투명으로 지명됩니다.</Text>

          <View style={{ paddingHorizontal: 45, paddingVertical: 100 }}>
            <BottomButton value='홈으로' pressed={false} onPress={handleNextPress} />
          </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  SetterList: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  Setter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    margin: 5,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 12.5,
  },
  note: {
    fontSize: 12,
    color: '#555',
  },
});

export default RequestSent;
