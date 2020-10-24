import React from 'react';
import {
  View,
  Text,
  // Button,
  // SafeAreaView,
  StyleSheet,
  // Dimensions,
} from 'react-native';

import colors from 'colors';

const styles = StyleSheet.create({
  // basic font style
  text: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  title: {
    fontSize: 25,
    color: colors.matteBlack,
    fontFamily: 'Poppins_600SemiBold',
    padding: 2,
  },
  subtitle: {
    color: colors.darkGrey,
    padding: 2,
  },
});

const HeroText = () => {
  const view = (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'salmon',
        alignItems: 'center',
        padding: 24,

        // borderWidth: 1,
        // borderColor: 'red',
        // borderStyle: 'solid',
      }}
    >
      {/* Title Message */}
      <Text style={[styles.text, styles.title]}>Welcome to Debtly</Text>
      {/* Subtitle Message */}
      <Text style={[styles.text, styles.subtitle]}>Simpler debt management.</Text>
    </View>
  );
  return view;
};

export default HeroText;
