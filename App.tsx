import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // 네비게이션 컨테이너 import
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // 네이티브 스택 네비게이터 import
import MainPage from './src/components/Home/Main/MainPage';
import SeekerMainPage from './src/components/Home/Main/SeekerMainPage'; // SeekerMainPage 컴포넌트 불러오기
import SetterMainPage from './src/components/Home/Main/SetterMainPage'; // SeekerMainPage 컴포넌트 불러오기
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.container, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="SeekerMainPage" component={SeekerMainPage} />
          <Stack.Screen name="SetterMainPage" component={SetterMainPage} />
          {/* 추가적인 스크린 설정 가능 */}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
