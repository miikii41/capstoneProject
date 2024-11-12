// ClosetContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface ClosetContextProps {
  clothes: string[]; // 옷 이미지 URL 배열
  addClothes: (imageUri: string) => void; // 옷 이미지를 추가하는 함수
}

// ClosetContext 생성
const ClosetContext = createContext<ClosetContextProps | undefined>(undefined);

// ClosetProvider 컴포넌트: children을 받으며, clothes 배열과 addClothes 함수를 제공합니다.
export const ClosetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clothes, setClothes] = useState<string[]>([]);

  // 옷 이미지를 clothes 배열에 추가하는 함수
  const addClothes = (imageUri: string) => {
    setClothes((prevClothes) => [...prevClothes, imageUri]);
  };

  return (
    <ClosetContext.Provider value={{ clothes, addClothes }}>
      {children}
    </ClosetContext.Provider>
  );
};

// useCloset Hook: ClosetContext에 접근할 수 있도록 제공
export const useCloset = (): ClosetContextProps => {
  const context = useContext(ClosetContext);
  if (!context) {
    throw new Error('useCloset must be used within a ClosetProvider');
  }
  return context;
};
