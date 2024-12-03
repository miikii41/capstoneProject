import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatDetail = ({ route }) => {
  const chatId = route?.params?.chatId || 'defaultChatId';
  const navigation = useNavigation();

  const [messages, setMessages] = useState([
    { id: '1', text: '간단한 제안서의 내용', user: 'me', expanded: true },
  ]);
  const [input, setInput] = useState('');

  // 메시지 전송 함수
  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { id: Date.now().toString(), text: input, user: 'me', expanded: false };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');
    }
  };

  // "자세히 보기" 클릭 이벤트
  const toggleMessageDetails = (id) => {
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
        {/* "간단한 제안서의 내용"일 때만 "자세히 보기"와 확장 내용 표시 */}
        {item.text === '간단한 제안서의 내용' && !item.expanded && (
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => toggleMessageDetails(item.id)}
          >
            <Text style={styles.detailButtonText}>자세히 보기</Text>
          </TouchableOpacity>
        )}
        {item.text === '간단한 제안서의 내용' && item.expanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.detailText}>Setter's Pick</Text>
            <Image
              source={require('../../assets/StyleResult/Casual.jpg')}
              style={styles.image}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{chatId}님의 제안서</Text>
      </View>

      {/* 메시지 리스트 */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messages}
      />

      {/* 입력창 */}
      <View style={styles.inputContainer}>

        <TouchableOpacity
        onPress={() => navigation.navigate('ClosetMain')} >

          <Image
            source={require('../../assets/Closet/hanger.png')}
            style={styles.hangerImage}
          />

         </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message"
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
    backgroundColor: '#FF6FAF',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  messages: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    maxWidth: '70%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  otherMessage: {
    alignSelf: 'flex-start',
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
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
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
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#FF6FAF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hangerImage: {
    width: 51,
    height: 27,
    marginRight:10,
  },
});

export default ChatDetail;
