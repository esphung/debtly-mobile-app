/*
FILENAME:     App.js
PURPOSE:      entry point for debtly app
AUTHOR:       Eric Phung
CREATED:      10/24/2020 11:49 AM
*/

import React, { useState } from 'react';
// import { Text, View } from 'react-native';
import { AppLoading } from 'expo';

import { Asset } from 'expo-asset';

// Poppins font from Google hosted libs
import {
  useFonts,
  // Poppins_100Thin,
  // Poppins_100Thin_Italic,
  // Poppins_200ExtraLight,
  // Poppins_200ExtraLight_Italic,
  // Poppins_300Light,
  // Poppins_300Light_Italic,
  // Poppins_400Regular,
  // Poppins_400Regular_Italic,
  Poppins_500Medium,
  // Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  // Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  // Poppins_700Bold_Italic,
  // Poppins_800ExtraBold,
  // Poppins_800ExtraBold_Italic,
  // Poppins_900Black,
  // Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import './globals';

import AuthStack from 'navigators/AuthStack';

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // load custom fonts
  const [fontsLoaded] = useFonts({
    // Poppins_100Thin,
    // Poppins_100Thin_Italic,
    // Poppins_200ExtraLight,
    // Poppins_200ExtraLight_Italic,
    // Poppins_300Light,
    // Poppins_300Light_Italic,
    // Poppins_400Regular,
    // Poppins_400Regular_Italic,
    Poppins_500Medium,
    // Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    // Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    // Poppins_700Bold_Italic,
    // Poppins_800ExtraBold,
    // Poppins_800ExtraBold_Italic,
    // Poppins_900Black,
    // Poppins_900Black_Italic,
  });

  const loadImageAssetsAsync = async () => {
    const imageAssets = cacheImages([
      // 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      global.defaultPlaceholderImage,
      // welcome screen images
      global.welcomeScreenImage,
      // onboarding images
      global.slide001Image,
      global.slide002Image,
      global.slide003Image,
      global.slide004Image,
      global.slide005Image,
      global.slide006Image,
    ]);
    await Promise.all([...imageAssets]);
  };

  // take user to authentication stack navigator
  let view = <AuthStack />;
  if (!fontsLoaded || !imagesLoaded) {
    // fonts or images not loaded yet, show splash screen
    view = (
      <AppLoading
        startAsync={loadImageAssetsAsync}
        onFinish={() => setImagesLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return view;
};
export default App;
