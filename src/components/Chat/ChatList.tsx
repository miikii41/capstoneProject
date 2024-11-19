import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {
  const navigation = useNavigation();
  const chats = [
    { id: '1', nickname: 'User Nickname', lastMessage: '간단한 제안서의 내용' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate('ChatDetail', { chatId: item.id })}
          >
            <Text style={styles.nickname}>{item.nickname}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  chatItem: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  nickname: { fontWeight: 'bold' },
  lastMessage: { color: '#555' },
});

export default ChatList;
