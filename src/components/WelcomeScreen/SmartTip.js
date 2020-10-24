import React from 'react';
import {
  View,
  Text,
  // Button,
  // SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import colors from 'colors';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  // basic font style
  text: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    padding: 6,
  },
  emoji: {
    fontSize: 22,
  },
  subtitle: {
    color: colors.darkGrey,
    // padding: 2,
  },
  strong: {
    color: colors.matteBlack,
  },
});

const HeroText = () => {
  const view = (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'salmon',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 24,

        // borderWidth: 1,
        // borderColor: 'red',
        // borderStyle: 'solid',
      }}
    >
      {/* Message Bubble */}
      <View
        style={{
          flex: 1,
          width: '80%',
          maxWidth: screen.width * 0.7, // 300,
          maxHeight: screen.height * 0.08, // 60,
          backgroundColor: 'white',
          borderRadius: 13,
          paddingHorizontal: 18,

          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',

          // borderWidth: 1,
          // borderColor: 'red',
          // borderStyle: 'solid',
        }}
      >
        <View
          style={{
            flex: 0.15,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',

            // borderWidth: 1,
            // borderColor: 'green',
            // borderStyle: 'solid',
          }}
        >
          <Text style={[styles.text, styles.emoji]}>🤑</Text>
        </View>

        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',

            // borderWidth: 1,
            // borderColor: 'green',
            // borderStyle: 'solid',
          }}
        >
          {/* Subtitle Message */}
          <Text style={[styles.text, styles.subtitle]}>
            Alejandro saved over
            <Text>{' '}</Text>
            <Text style={styles.strong}>$1200</Text>
            <Text>{' '}</Text>
            This year with Debtly&apos;s advice
          </Text>
        </View>
      </View>
    </View>
  );
  return view;
};

export default HeroText;
