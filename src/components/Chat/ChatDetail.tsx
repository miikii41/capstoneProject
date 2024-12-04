import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatDetail = ({ route }) => {
  const chatId = route?.params?.chatId || 'defaultChatId';
  const navigation = useNavigation();

  const [messages, setMessages] = useState([
    { id: '1', text: 'Dora의 요청서 확인', user: 'Dora', isRequest: true, expanded: false },
    { id: '2', text: '간단한 제안서의 내용', user: 'me', isRequest: false },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [aiRecommendations, setAiRecommendations] = useState([]); // AI 추천 이미지 상태
  const [selectedImage, setSelectedImage] = useState(null); // 선택된 이미지

  // AI 추천 로딩 함수
  const handleShowRecommendations = () => {
    setLoading(true); // 로딩 시작
    setAiRecommendations([]); // 이전 데이터 초기a화
    setSelectedImage(null); // 선택 초기화

    setTimeout(() => {
      setLoading(false); // 로딩 종료
      setAiRecommendations([
        { id: 1, source: require('../../assets/StyleResult/ai1.jpg') },
        { id: 2, source: require('../../assets/StyleResult/ai2.jpg') },
        { id: 3, source: require('../../assets/StyleResult/ai3.jpg') },
      ]); // 가라 AI 추천 이미지 설정
    }, 5000); // 5초 로딩
  };

  // 이미지 클릭 핸들러
  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };

  // 메시지 전송 함수
  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { id: Date.now().toString(), text: input, user: 'me', isRequest: false };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');
    }
  };

  // 요청서 클릭 이벤트
  const toggleRequestDetails = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, expanded: !msg.expanded } : msg
      )
    );
  };

  // 메시지 렌더링 함수
  const renderMessage = ({ item }) => {
    const isMyMessage = item.user === 'me';
    return (
      <View style={[styles.message, isMyMessage ? styles.myMessage : styles.otherMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
        {/* 요청서 메시지일 경우 */}
        {item.isRequest && (
          <>
            {!item.expanded && (
              <TouchableOpacity
                style={styles.detailButton}
                onPress={() => toggleRequestDetails(item.id)}
              >
                <Text style={styles.detailButtonText}>자세히 보기</Text>
              </TouchableOpacity>
            )}
            {item.expanded && (
              <View style={styles.expandedContent}>
                <Image
                  source={require('../../assets/StyleResult/img.png')}
                  style={styles.image}
                />
                <Text style={styles.detailText}>장소: 학교</Text>
                <Text style={styles.detailText}>계절: winter</Text>
                <Text style={styles.detailText}>날씨: 눈</Text>
                <Text style={styles.detailText}>스타일: 비즈니스</Text>
                <Text style={styles.detailText}>동행: 친구</Text>
                <View style={styles.separator} />
                <Text style={styles.detailText}>체형: apple</Text>
                <Text style={styles.detailText}>컴플렉스: 하체비만</Text>
                {/* "가장 많이 매칭된 코디 보러가기" 버튼 */}
                <TouchableOpacity style={styles.recommendationButton} onPress={handleShowRecommendations}>
                  <Text style={styles.recommendationButtonText}>가장 많이 매칭된 코디 보러가기</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{chatId}님의 채팅</Text>
      </View>

      {/* 메시지 리스트 */}
      <ScrollView contentContainerStyle={styles.messages}>
        {messages.map((item) => (
          <View key={item.id}>{renderMessage({ item })}</View>
        ))}
      </ScrollView>

      {/* AI 추천 결과 (오른쪽 채팅 스타일) */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6FAF" />
          <Text style={styles.loadingText}>AI 추천 결과를 분석 중입니다...</Text>
        </View>
      )}
      {!loading && aiRecommendations.length > 0 && (
        <ScrollView horizontal contentContainerStyle={styles.recommendationContainer}>
          {aiRecommendations.map((image) => (
            <TouchableOpacity
              key={image.id}
              onPress={() => handleImageClick(image.id)}
              style={[
                styles.recommendationImageWrapper,
                selectedImage === image.id && styles.selectedImageWrapper,
              ]}
            >
              <Image source={image.source} style={styles.recommendationImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* 입력창 */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddCloset')}>
          <Image
            source={require('../../assets/Closet/hanger.png')}
            style={styles.hangerImage}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="메시지를 입력하세요"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    backgroundColor: '#FFDDE3', // 연핑크
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  messages: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    maxWidth: '70%',
    borderColor: '#FFB6C1',
    borderWidth: 1,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFE4E9',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  detailButton: {
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  detailButtonText: {
    color: '#007bff',
    fontSize: 14,
  },
  expandedContent: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  image: {
    width: '80%',
    height: undefined,
    aspectRatio: 4 / 3,
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    backgroundColor: '#ddd',
  },
  recommendationButton: {
    marginTop: 10,
    backgroundColor: '#FFDDE3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  recommendationButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  loadingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  recommendationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  recommendationImageWrapper: {
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImageWrapper: {
    borderColor: '#FF6FAF', // 선택된 이미지 강조 색상
  },
  recommendationImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#FFDDE3',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hangerImage: {
    width: 51,
    height: 27,
    marginRight: 10,
  },
});

export default ChatDetail;
