import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';
import styled from 'styled-components/native';

const PortfolioPage = () => {
  const data = [
    { label: '실력/경력', data: '한국패션디자인공모전 동상\n업씨패션회사 인턴 6개월' },
    { label: '포트폴리오', data: 'portfolio' }
  ];

  // 로컬 이미지 데이터
  const portfolioImages = [
    { id: 1, source: require('../../../assets/Portfolio/Portfolio_1.jpg') },
    { id: 2, source: require('../../../assets/Portfolio/Portfolio_2.jpg') },
    { id: 3, source: require('../../../assets/Portfolio/Portfolio_3.jpg') },
    { id: 4, source: require('../../../assets/Portfolio/Portfolio_4.jpg') },
  ];

  return (
    <Tabs.FlatList
      data={data}
      renderItem={({ item }) => {
        if (item.label === '포트폴리오') {
          return (
            <PortfolioSection>
              <Text>{item.label}</Text>
              <FlatList
                data={portfolioImages}
                numColumns={3} // 한 줄에 세 개씩 배치
                keyExtractor={(image) => image.id.toString()}
                renderItem={({ item: image }) => (
                  <TouchableOpacity>
                    <ImageContainer>
                      <PortfolioImage source={image.source} />
                    </ImageContainer>
                  </TouchableOpacity>
                )}
              />
            </PortfolioSection>
          );
        } else {
          return (
            <InfoSection>
              <Text>{item.label}</Text>
              <Text style={{ textAlign: 'right' }}>{item.data}</Text>
            </InfoSection>
          );
        }
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

// 스타일 정의
const InfoSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border-bottom-width: 1px;
  border-color: #DFDFDF;
`;

const PortfolioSection = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: #DFDFDF;
`;

const ImageContainer = styled.View`
  flex: 1;
  margin: 5px;
  align-items: center;
`;

const PortfolioImage = styled.Image`
  width: 115;
  height: 115px;
  border-radius: 5px;

`;


export default PortfolioPage;
