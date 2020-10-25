/*
FILENAME:     DisplayImage.js
PURPOSE:      Displays welcome screen image
AUTHOR:       Eric Phung
CREATED:      10/24/2020 12:31 PM
*/
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    // justifyContent: 'center',
    justifyContent: 'flex-end',
    // paddingBottom: 50,
    alignItems: 'center',

    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
  image: {
    minWidth: screen.width * 0.7, // 200,
    height: screen.height * 0.3, // 200,
    resizeMode: 'contain',
  },
});

// console.log('screen.width * 0.6: ', screen.width * 0.6);
// console.log('screen.height * 0.3: ', screen.height * 0.3);

const DisplayImage = () => {
  const view = (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={global.welcomeScreenImage}
      />
    </View>
  );
  return view;
};

export default DisplayImage;
