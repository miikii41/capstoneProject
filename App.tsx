import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from './src/components/Home/Main/MainPage';
import SeekerMainPage from './src/components/Home/Main/SeekerMainPage';
import SetterMainPage from './src/components/Home/Main/SetterMainPage';
import MyPageHome from './src/components/Home/MyPage/MyPageHome';
import MyPageTabView from './src/components/Home/MyPage/MyPageTabView';
import PortfolioPage from './src/components/Home/MyPage/PortfolioPage';
import Review from './src/components/Home/MyPage/Review';
import InitialLogin from './src/components/Auth/InitialLogin';
import ChooseUserType from './src/components/Auth/ChooseUserType';
import SeekerLogin from './src/components/Auth/Seeker/SeekerLogin';
import SetterLogin from './src/components/Auth/Setter/SetterLogin';
import WeatherProvider from './src/contexts/WeatherProvider'; // 새로 추가한 WeatherProvider
import WeatherPage from "./src/components/Weather/WeatherPage"; // WeatherPage를 추가
import RequestPage from './src/components/Home/Request/RequestPage';
import RequestApproval from './src/components/Home/Request/RequestApproval';
import RequestForm from './src/components/Home/Request/RequestForm';


import { Colors } from 'react-native/Libraries/NewAppScreen';

// 네비게이터 생성
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Seeker 전용 네비게이터
function SeekerNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SeekerMainPage" component={SeekerMainPage} />
      <Tab.Screen name="RequestForm" component={RequestForm} />
      <Tab.Screen name="WeatherPage" component={WeatherPage} />
      <Stack.Screen name="RequestApproval" component={RequestApproval} />
      <Stack.Screen name="RequestPage" component={RequestPage} />


    </Tab.Navigator>
  );
}

// Setter 전용 네비게이터
function SetterNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SetterMainPage" component={SetterMainPage} />
      <Tab.Screen name="PortfolioPage" component={PortfolioPage} />
      <Tab.Screen name="Review" component={Review} />
       <Stack.Screen name="MyPageTabView" component={MyPageTabView} />
       <Stack.Screen name="RequestApproval" component={RequestApproval} />
       <Stack.Screen name="RequestPage" component={RequestPage} />


    </Tab.Navigator>
  );
}

// Guest (로그인 전) 네비게이터
function GuestNavigator({ setUserType }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InitialLogin"
        options={{ headerShown: false }}
        component={(props) => <InitialLogin {...props} setUserType={setUserType} />} // component prop 사용하여 수정
      />
      <Stack.Screen name="SeekerLogin" component={SeekerLogin} />
      <Stack.Screen name="SetterLogin" component={SetterLogin} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="ChooseUserType" component={ChooseUserType} />

    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [userType, setUserType] = useState<'guest' | 'seeker' | 'setter'>('guest'); // 임시 사용자 상태

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <WeatherProvider>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {
            userType === 'guest' ? <GuestNavigator setUserType={setUserType} /> :
            userType === 'seeker' ? <SeekerNavigator /> :
            <SetterNavigator />
          }
        </SafeAreaView>
      </WeatherProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;