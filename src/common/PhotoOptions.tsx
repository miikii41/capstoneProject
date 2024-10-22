import React, { useCallback } from 'react';
import {
  Alert,
  TouchableOpacity,
  ViewStyle,
  Text,
  Image,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import styled from 'styled-components/native';
import PhotoIcon from '../assets/common/Photo.svg'; // SVG 파일을 올바르게 불러오기

const PhotosInput = styled.View`
  display: flex;
  flex-flow: row wrap;
`;

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

interface PhotoProps {
  buttonLabel?: string;
  style?: ViewStyle;
  photo?: undefined | PhotoResultProps[];
  setPhoto: (p: PhotoResultProps[]) => void;
  max: number;
}

export interface PhotoResultProps {
  fileName: string | undefined;
  width: number | undefined;
  height: number | undefined;
  uri: string;
}

const PhotoOptions = ({
  buttonLabel,
  photo,
  setPhoto,
  max,
  style,
}: PhotoProps) => {
  // 디버깅을 위해 props를 출력
  console.log('PhotoOptions props:', { buttonLabel, photo, style });

  const CameraActions: Action[] = [
    {
      title: '카메라',
      type: 'capture',
      options: {
        selectionLimit: max,
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 300,
        maxWidth: 300,
      },
    },
    {
      title: '앨범',
      type: 'library',
      options: {
        selectionLimit: max,
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 300,
        maxWidth: 300,
      },
    },
  ];

  const onButtonPress = useCallback(
    (type: string, options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions) => {
      const handleResponse = (response: ImagePicker.ImagePickerResponse) => {
        if (response.errorCode !== undefined) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (!response.didCancel && response.assets) {
          const selectedPhotos = response.assets.map(asset => {
            if (asset.uri === undefined) throw console.error('ImagePicker error: uri not found');
            return {
              fileName: asset.fileName,
              width: asset.width,
              height: asset.height,
              uri: asset.uri,
            };
          });
          setPhoto(selectedPhotos);
        }
      };

      if (type === 'capture') {
        ImagePicker.launchCamera(options, handleResponse);
      } else {
        ImagePicker.launchImageLibrary(options, handleResponse);
      }
    },
    [setPhoto],
  );

  return (
    <PhotosInput>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          backgroundColor: 'lightgray',
          borderRadius: 6,
          marginBottom: 20,
          paddingVertical: 6,
          ...(style || {}),
        }}
        onPress={() => {
          Alert.alert('사진 선택', '', [
            {
              text: '카메라',
              onPress: () => onButtonPress(CameraActions[0].type, CameraActions[0].options),
            },
            {
              text: '앨범',
              onPress: () => onButtonPress(CameraActions[1].type, CameraActions[1].options),
            },
            { text: '취소', style: 'destructive' },
          ]);
        }}>
        {buttonLabel && typeof buttonLabel === 'string' && (
          <>
            <PhotoIcon width={24} height={24} />
            <Text style={{ marginLeft: 10 }}>{buttonLabel}</Text>
          </>
        )}
        {photo && Array.isArray(photo) && photo.length > 0 && (
          <Image
            source={{ uri: photo[0].uri }}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          />
        )}
      </TouchableOpacity>
    </PhotosInput>
  );
};

export default PhotoOptions;
