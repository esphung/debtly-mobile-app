import React from 'react';
import {
  View,
  // Text,
  // Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import colors from 'colors';

// shared components
import NeumorphicButton from 'components/Shared/NeumorphicButton';

import DisplayImage from 'components/WelcomeScreen/DisplayImage';

import HeroText from 'components/WelcomeScreen/HeroText';

import SmartTip from 'components/WelcomeScreen/SmartTip';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  northPanel: {
    flex: 1,
    // backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',

    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
  soutPanel: {
    flex: 0.3,
    // backgroundColor: 'skyblue',
  },
});

function WelcomeScreen({ navigation }) {
  // event called to navigate to onboarding screen
  const getStartedBtnPressed = () => navigation.navigate('Onboarding', {
    slideId: 0,
  });
  const view = (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.offGrey,
        alignItems: 'center', // for device rotation
      }}
    >
      {/* NORTH PANEL */}
      <View style={styles.northPanel}>
        {/* Screen Image Container */}
        <View
          style={{
            flex: 1,
            width: screen.width,

            // borderWidth: 1,
            // borderColor: 'blue',
            // borderStyle: 'solid',
          }}
        >
          <DisplayImage />
        </View>
        {/* Screen Message Container */}
        <View
          style={{
            flex: 0.4,
            width: screen.width,

            // borderWidth: 1,
            // borderColor: 'blue',
            // borderStyle: 'solid',
          }}
        >
          <HeroText />
        </View>

      </View>

      {/* SOUTH PANEL */}
      <View style={styles.soutPanel}>

        {/* Get Started Button Container */}
        <View
          style={{
            flex: 0.5,
            paddingBottom: 20,
            width: screen.width,
            height: screen.height * 0.1,
            justifyContent: 'center',
            alignItems: 'center',

            // borderWidth: 1,
            // borderColor: 'blue',
            // borderStyle: 'solid',
          }}
        >
          <NeumorphicButton
            onPress={getStartedBtnPressed}
            title="Get Started"
            width={300}
          />
        </View>
        <View
          style={{
            flex: 1,

            // borderWidth: 1,
            // borderColor: 'green',
            // borderStyle: 'solid',
          }}
        >
          <SmartTip />
        </View>
      </View>
    </SafeAreaView>
  );
  return view;
}

export default WelcomeScreen;
