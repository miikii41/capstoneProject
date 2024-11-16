import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Picker } from 'react-native';

const SetterSignup = () => {
  // State variables
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [experience, setExperience] = useState(''); // 추가된 필드 (경험)
  const [additionalInput, setAdditionalInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 아이디 중복 확인
  const checkId = () => {
    Alert.alert('Available ID');
  };

  // 닉네임 중복 확인
  const checkNickname = () => {
    Alert.alert('Available Nickname');
  };

  // 비밀번호 검증
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('비밀번호는 영문과 숫자를 포함해 8자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Setter</Text>


      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="아이디 입력"
          value={id}
          onChangeText={setId}
        />
        <TouchableOpacity style={styles.checkButton} onPress={checkId}>
          <Text style={styles.checkButtonText}>중복확인</Text>
        </TouchableOpacity>
      </View>


      <TextInput
        style={[styles.input, passwordError && styles.errorInput]}
        placeholder="비밀번호 (영문, 숫자 혼합 8자 이상)"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          validatePassword(text);
        }}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}


      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="여성" value="여성" />
        <Picker.Item label="남성" value="남성" />
        <Picker.Item label="선택안함" value="선택안함" />
      </Picker>


      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="닉네임 입력"
          value={nickname}
          onChangeText={setNickname}
        />
        <TouchableOpacity style={styles.checkButton} onPress={checkNickname}>
          <Text style={styles.checkButtonText}>중복확인</Text>
        </TouchableOpacity>
      </View>


      <TextInput
        style={styles.input}
        placeholder="키 (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="몸무게 (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />


      <TextInput
        style={styles.input}
        placeholder="경력 (연수)"
        keyboardType="numeric"
        value={experience}
        onChangeText={setExperience}
      />


      <TextInput
        style={styles.input}
        placeholder="기타 입력 (선택 사항)"
        value={additionalInput}
        onChangeText={setAdditionalInput}
      />

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  checkButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SetterSignup;
