import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { Buffer } from 'buffer';
import { useNavigation } from '@react-navigation/native';
import { useCloset } from '../../contexts/ClosetContext';

const CLIPDROP_API_KEY = '6713d9ba622f204a5ff97c3c8a0c0cdd6d902b942e78a205284ff4672d7e66e2886b5cb2d60127181bffd61ce77696e4';

const AddCloset = () => {
  const navigation = useNavigation();
  const { addClothes } = useCloset();

  const [hangers, setHangers] = useState(
    Array.from({ length: 8 }, (_, i) => ({ id: i + 1, occupied: false, item: null }))
  );

  const removeBackgroundWithClipDrop = async (imageUri) => {
    const formData = new FormData();
    formData.append('image_file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const response = await axios({
        method: 'post',
        url: 'https://clipdrop-api.co/remove-background/v1',
        data: formData,
        headers: {
          'x-api-key': CLIPDROP_API_KEY,
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'arraybuffer',
      });

      if (response.status === 200) {
        const base64Image = `data:image/png;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
        return base64Image;
      } else {
        console.error('Background removal failed:', response.data);
        Alert.alert("Error", "Failed to remove background from image.");
        return null;
      }
    } catch (error) {
      console.error('Error message:', error.message);
      Alert.alert("Error", "Failed to remove background from image due to an API error.");
      return null;
    }
  };

const handleAddItem = (hangerId) => {
    launchImageLibrary({ mediaType: 'photo' }, async (response) => {
      if (response.assets && response.assets.length > 0) {
        const selectedImageUri = response.assets[0].uri;

        // ClipDrop API를 사용하여 배경 제거
        const bgRemovedImageUri = await removeBackgroundWithClipDrop(selectedImageUri);

        if (bgRemovedImageUri) {
          setHangers((prevHangers) =>
            prevHangers.map((hanger) =>
              hanger.id === hangerId ? { ...hanger, occupied: true, item: bgRemovedImageUri } : hanger
            )
          );

          addClothes(bgRemovedImageUri); // 옷 이미지 URL을 Context에 저장
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD TO CLOSET</Text>
      <Text style={styles.subtitle}>CLICK HANGER TO ADD CLOSET</Text>

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
                  source={{ uri: hanger.item }} // 배경 제거된 이미지 URI 사용
                  style={styles.clothesImage}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ClosetMain')}>
        <Image source={require('../../assets/common/next.png')} style={styles.nextButtonImage} />
      </TouchableOpacity>
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
    fontWeight: 'bold',
    color: 'magenta',
    marginTop: 50,
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
    resizeMode: 'contain',
  },
   nextButton: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nextButtonImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      marginBottom: 50,
      marginRight: 50,
    },
});

export default AddCloset;
