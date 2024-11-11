import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ClosetMain = () => {
  const [hangers, setHangers] = useState([
    { id: 1, occupied: false, item: null },
    { id: 2, occupied: false, item: null },
    { id: 3, occupied: false, item: null },
    { id: 4, occupied: false, item: null },
    { id: 5, occupied: false, item: null },
    { id: 6, occupied: false, item: null },
  ]);

  const handleAddItem = (hangerId) => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        const selectedImageUri = response.assets[0].uri;
        setHangers((prevHangers) =>
          prevHangers.map((hanger) =>
            hanger.id === hangerId ? { ...hanger, occupied: true, item: selectedImageUri } : hanger
          )
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHOOSE FROM CLOSET</Text>
      <Text style={styles.subtitle}>DRAG 1 ITEM FOR TODAY</Text>

      <View style={styles.closetContainer}>
        {hangers.map((hanger) => (
          <TouchableOpacity key={hanger.id} onPress={() => handleAddItem(hanger.id)}>
            <View style={styles.hangerContainer}>
              <Image
                source={require('../../assets/Closet/hanger.png')}
                style={styles.hangerImage}
              />
              {hanger.occupied && hanger.item && (
                <Image
                  source={{ uri: hanger.item }} // 업로드된 이미지 URI 사용
                  style={styles.clothesImage}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'magenta',
    marginBottom: 20,
  },
  closetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  hangerContainer: {
    width: 130,
    height: 70,
    margin: 10,
    position: 'relative',
  },
  hangerImage: {
    width: '100%',
    height: '100%',
  },
  clothesImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0%',
    left: '0%',
  },
});

export default ClosetMain;
