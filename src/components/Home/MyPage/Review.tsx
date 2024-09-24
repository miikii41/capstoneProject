import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';
import styled from 'styled-components/native';

// 필요한 컴포넌트를 임포트하세요
// import Slider from 'your-path';
// import StarRating from 'your-path';
// import ReviewComment from 'your-path';
// import ReviewItem from 'your-path';

// 상수 정의
const LIGHTGRAY = '#D3D3D3';
const BLACK = '#000000';

// SummarySection 컴포넌트 정의
const SummarySection = () => {
  return (
    <Container>
      <ItemContainer style={{ marginBottom: 20 }}>
        <RatingContainer>
          <Text style={{ color: BLACK, fontSize: 40, fontWeight: '700' }}>4.0</Text>
        </RatingContainer>
        <SliderContainer>
          {[1, 2, 3, 4, 5].map((idx) => (
            <ItemContainer key={idx} style={{ alignItems: 'center' }}>
              <Text style={{ marginRight: 5 }}>{idx}점</Text>
              <Text style={{ marginLeft: 5 }}>3</Text>
            </ItemContainer>
          ))}
        </SliderContainer>
      </ItemContainer>
      <ItemContainer>
        <Text>거래</Text>
      </ItemContainer>
      <ItemContainer>
        <Text>디자인</Text>
      </ItemContainer>
    </Container>
  );
};

// 스타일 정의
const ItemContainer = styled.View`
  flex-direction: row;
  padding: 5px;
`;

const Container = styled.View`
  padding-vertical: 20px;
  padding-horizontal: 40px;
  border-bottom-color: ${LIGHTGRAY};
  border-bottom-width: 1px;
`;

const RatingContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 15px;
`;

const SliderContainer = styled.View`
  padding-horizontal: 40px;
  flex: 1;
`;

// Review 컴포넌트 정의
interface ReviewProps {
  flatListRef: React.RefObject<FlatList<any>>;
}

const Review: React.FC<ReviewProps> = ({ flatListRef }) => {
  return (
    <Tabs.FlatList
      ref={flatListRef}
      bounces={false}
      overScrollMode="never"
      data={[...Array(3).keys()]} // 더미 데이터
      ListHeaderComponent={SummarySection}
      // ReviewItem 컴포넌트가 필요합니다.
      keyExtractor={(item, index) => index.toString()}
      style={{ marginBottom: 60 }}
    />
  );
};

// Review 컴포넌트를 default export로 내보냅니다.
export default Review;
