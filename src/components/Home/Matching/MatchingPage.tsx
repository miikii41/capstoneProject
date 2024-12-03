import React from 'react';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

// 색상 값 직접 지정
const DEEPPINK = 'deeppink'; // 예시: 보라색
const LIGHTGRAY = '#d3d3d3'; // 예시: 연한 회색
const WHITE = '#FFFFFF'; // 흰색
const GRAY = '#808080'; // 회색
const BLACK = '#000000'; // 검정

const RequestBox = styled.View`
  padding: 15px;
  margin: 10px;
  background-color: ${WHITE};
  border-radius: 10px;
  shadow-color: ${BLACK};
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 3;
`;

const MatchingPage: React.FC = () => {
  const requestlist = [
    { id: 'Cindy', name: '#데이트 #레스토랑 #페미닌', requestDate: '2024-12-03', status: 'progress' },
    { id: 'Dora', name: '#학교 #발표 #비즈니스', requestDate: '2024-12-03', status: 'completed' },
    { id: 'Ariana', name: '#비즈니스 #회사 #미니멀', requestDate: '2024-12-04', status: 'before' },
  ];

  const filteredRequests = {
    before: requestlist.filter(request => request.status === 'before'),
    progress: requestlist.filter(request => request.status === 'progress'),
    completed: requestlist.filter(request => request.status === 'completed'),
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <Tabs.Container
        renderTabBar={(props) => (
          <MaterialTabBar
            {...props}
            activeColor={DEEPPINK} // 활성 탭 글씨 색상
            inactiveColor={LIGHTGRAY} // 비활성 탭 글씨 색상
            indicatorStyle={{
              backgroundColor: DEEPPINK, // 인디케이터 색상
              height: 4,
            }}
            labelStyle={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
            tabBarStyle={{
              backgroundColor: WHITE,
              borderBottomWidth: 1,
              borderBottomColor: GRAY,
            }}
          />
        )}
      >
        <Tabs.Tab name="대기중">
          <Tabs.FlatList
            data={filteredRequests.before}
            renderItem={({ item }) => (
              <RequestBox>
                <Text>{item.name}</Text>
                <Text>{item.requestDate}</Text>
              </RequestBox>
            )}
            keyExtractor={(item) => item.id}
          />
        </Tabs.Tab>

        <Tabs.Tab name="진행중">
          <Tabs.FlatList
            data={filteredRequests.progress}
            renderItem={({ item }) => (
              <RequestBox>
                <Text>{item.name}</Text>
                <Text>{item.requestDate}</Text>
              </RequestBox>
            )}
            keyExtractor={(item) => item.id}
          />
        </Tabs.Tab>

        <Tabs.Tab name="완료됨">
          <Tabs.FlatList
            data={filteredRequests.completed}
            renderItem={({ item }) => (
              <RequestBox>
                <Text>{item.name}</Text>
                <Text>{item.requestDate}</Text>
              </RequestBox>
            )}
            keyExtractor={(item) => item.id}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </SafeAreaView>
  );
};

export default MatchingPage;
