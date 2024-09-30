import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParams } from '../../../pages/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




import PortfolioPage from './PortfolioPage';
import Review from './Review';

export const ProfileSection = ({ navigation }: { navigation: any }) => {
  const UserName = '닉네임';
  const instagramURL = 'https://www.instagram.com/fashion_seek_/?utm_source=ig_web_button_share_sheet';
  const blogURL = 'https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0';

  const handlePressLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };


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
      <View style={{ flexDirection: 'row', padding: 20, paddingTop: 10, paddingBottom: 0 }}>

        {/* 인스타그램 아이콘 */}
        <TouchableOpacity onPress={() => handlePressLink(instagramURL)} style={{ marginHorizontal: 10 }}>
          <Icon name="instagram" size={30} color="#E4405F" />
        </TouchableOpacity>

        {/* 블로그 아이콘 */}
        <TouchableOpacity onPress={() => handlePressLink(blogURL)} style={{ marginHorizontal: 10 }}>
          <Icon name="web" size={30} color="#00BFFF" />
        </TouchableOpacity>

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
