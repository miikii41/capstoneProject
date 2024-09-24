import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParams } from '../../../pages/Home';

import PortfolioPage from './PortfolioPage';
import Review from './Review';

export const ProfileSection = ({ navigation }: { navigation: any }) => {
  const UserName = '닉네임';
  const selfIntroduce = '인스타 link /n 블로그 link 링크드인 예정';


  return (
    <View style={{ alignItems: 'center' }}>
      <ImageBackground
        style={{ width: '100%', height: 200 }}
        imageStyle={{ height: 160 }}
        source={{ uri: 'https://image.made-in-china.com/2f0j00efRbSJMtHgqG/Denim-Bag-Youth-Fashion-Casual-Small-Mini-Square-Ladies-Shoulder-Bag-Women-Wash-Bags.webp' }}>
        <View style={{ width: '100%', height: 160, backgroundColor: '#00000066', opacity: 0.7 }} />
        <Image
          style={{ alignSelf: 'center', width: 90, height: 90, borderRadius: 180, position: 'absolute', top: 110 }}
          source={{ uri: 'https://image.made-in-china.com/2f0j00efRbSJMtHgqG/Denim-Bag-Youth-Fashion-Casual-Small-Mini-Square-Ladies-Shoulder-Bag-Women-Wash-Bags.webp' }}
        />
      </ImageBackground>
      <Text style={{ marginTop: 8, fontWeight: 'bold', fontSize: 20 }}>{UserName}</Text>
      <View style={{ padding: 20, paddingTop: 0, paddingBottom: 0 }}>
        <Text>{selfIntroduce}</Text>
      </View>
    </View>
  );
};

const MyPageTabView = ({ navigation, route }: StackScreenProps<HomeStackParams, 'MyPage'>) => {
  const [routes] = useState([
    { key: 'portfolio', title: 'Portfolio' },
    { key: 'review', title: 'Review' }
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs.Container
        renderHeader={() => <ProfileSection navigation={navigation} />}
        headerContainerStyle={{
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderColor: '#D9D9D9'
        }}
        renderTabBar={props => (
          <MaterialTabBar
            {...props}
            indicatorStyle={{
              backgroundColor: '#BDBDBD',
              height: 2
            }}
            style={{
              backgroundColor: 'white',
            }}
            labelStyle={{
              color: 'black',
              fontWeight: '700',
              fontSize: 16
            }}
          />
        )}
      >
        {routes.map(route => (
          <Tabs.Tab key={route.key} name={route.title}>
            {route.key === 'portfolio' && <PortfolioPage />}
            {route.key === 'review' && <Review />}
          </Tabs.Tab>
        ))}
      </Tabs.Container>
    </SafeAreaView>
  );
};

export default MyPageTabView;
