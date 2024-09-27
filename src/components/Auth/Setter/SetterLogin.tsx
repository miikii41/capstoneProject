
import React, { useState, Fragment, useContext, createContext } from 'react';
import { SafeAreaView, View, Dimensions, TextInput, TouchableOpacity, Alert, Text } from 'react-native';

// 색상 설정
const GREEN = '#32CD32';
const PURPLE = '#800080';

// 로그인 컨텍스트 생성
const LoginContext = createContext({
  isLogin: false,
  setLogin: (value: boolean) => {}
});

interface LoginProps {
  navigation: any;
}

interface LoginInputProps {
  placeholder: string;
  secure?: boolean;
  onChangeText: (text: string) => void;
}

// 입력 필드 컴포넌트
function LoginInput({ placeholder, secure = false, onChangeText }: LoginInputProps) {
  const { width } = Dimensions.get('window');

  return (
    <TextInput
      style={{
        width: width * 0.8,
        height: 45,
        backgroundColor: '#FFFFFF80',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        padding: 15,
        marginVertical: 6,
        color: '#ffffff',
      }}
      placeholder={placeholder}
      placeholderTextColor="black"
      onChangeText={onChangeText}
      secureTextEntry={secure}
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
    />
  );
}

// 로그인 처리 함수
const processLoginResponse = (response: any, navigate: () => void, setLogin: (value: boolean) => void) => {
  if (response.status === 200) {
    const { access, refresh } = response.data;
    setLogin(true);
    navigate();
  } else {
    Alert.alert(
      response.status === 400 && response.data.extra?.fields?.detail
        ? response.data.extra.fields.detail
        : '예상치 못한 오류가 발생하였습니다.'
    );
  }
};

// 요청 함수 (예제용 가짜 함수)
const Request = () => ({
  post: async (url: string, data: any) => {
    // 예제 응답
    return {
      status: 200,
      data: {
        access: 'fake-access-token',
        refresh: 'fake-refresh-token',
      },
    };
  },
});

export default function Login({ navigation }: LoginProps) {
  const { setLogin } = useContext(LoginContext);
  const { width, height } = Dimensions.get('window');
  const [form, setForm] = useState({ email: '', password: '' });
  const request = Request();

  const handleLogin = async () => {
    const response = await request.post(`/api/user/login`, form);
    processLoginResponse(
      response,
      () => navigation.navigate('Home'),
      setLogin
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#D3D3D3' }} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#D3D3D3',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignSelf: 'flex-start',
            marginTop: height * 0.02,
            marginLeft: width * 0.03,
          }}
        >
          <Text style={{ color: '#fff' }}>{"<"}</Text>
        </TouchableOpacity>

        <View style={{ marginTop: height * 0.02 }}>
          <LoginInput
            placeholder="이메일"
            onChangeText={(value) => setForm((prev) => ({ ...prev, email: value }))}
          />
          <LoginInput
            placeholder="비밀번호"
            secure
            onChangeText={(value) => setForm((prev) => ({ ...prev, password: value }))}
          />
          <TouchableOpacity
            style={{
              width: width * 0.8,
              height: 45,
              backgroundColor: 'white',
              borderRadius: 5,
              marginVertical: 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleLogin}
          >
            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>로그인</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

// 로그인 컨텍스트 프로바이더 컴포넌트
export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
